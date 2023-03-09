import './index.css'
import { Ship } from '../Ship'
import { v1 as uuid } from 'uuid'
import { orientations, letters, numbers, comparePosition } from '../../utils'
import { useContext } from 'react'
import BattleShipContext from '../../contexts/BattleShipContext'

export const Board = () => {
  const { ships, setShips, hits, setHits, shipsFixed, setShipsFixed, selectedShip, setSelectedShip, resetGame } = useContext(BattleShipContext)

  const getShipInPosition = (position) => {
    return ships.find(ship => {
      if (!ship.position) return false
      if (ship.size === 1) return comparePosition(ship.position, position)
      else if (ship.orientation === orientations.COLUMN) {
        const shipNumberPositionStart = numbers.indexOf(ship.position.number)
        const shipNumberPositionEnd = shipNumberPositionStart + ship.size
        const hitNumberPosition = numbers.indexOf(position.number)

        return ship.position.letter === position.letter && hitNumberPosition >= shipNumberPositionStart && hitNumberPosition < shipNumberPositionEnd
      } else if (ship.orientation === orientations.ROW) {
        const shipLetterPositionStart = letters.indexOf(ship.position.letter)
        const shipLetterPositionEnd = shipLetterPositionStart + ship.size
        const hitLetterPosition = letters.indexOf(position.letter)

        return ship.position.number === position.number && hitLetterPosition >= shipLetterPositionStart && hitLetterPosition < shipLetterPositionEnd
      }
      return false
    })
  }

  const checkValidPosition = (position) => {
    if (!selectedShip) return false
    if (selectedShip.size === 1) return true
    else if (selectedShip.orientation === orientations.COLUMN) {
      const shipNumberPositionStart = numbers.indexOf(position.number)
      const shipNumberPositionEnd = shipNumberPositionStart + selectedShip.size

      return shipNumberPositionEnd <= numbers.length
    } else if (selectedShip.orientation === orientations.ROW) {
      const shipLetterPositionStart = letters.indexOf(position.letter)
      const shipLetterPositionEnd = shipLetterPositionStart + selectedShip.size

      return shipLetterPositionEnd <= letters.length
    }
    return false
  }

  const handleBoxClick = (position) => {
    if (!shipsFixed) return
    if (hits.filter(hit => comparePosition(hit.position, position)).length > 0) return

    const shipInPosition = getShipInPosition(position)
    console.log(shipInPosition)

    if (shipInPosition) {
      setShips(oldShips => {
        const newShips = [...oldShips]
        const index = newShips.findIndex(ship => ship.id === shipInPosition.id)
        const modifiedShip = { ...newShips[index] }
        modifiedShip.hits++

        newShips[index] = modifiedShip
        return newShips
      })
    }

    setHits(oldHits => [...oldHits, {
      position,
      hit: shipInPosition !== undefined,
      id: uuid()
    }])
  }

  const handleFixShips = () => {
    if (ships.filter(ship => !ship.position).length > 0) return
    setShipsFixed(true)
  }

  const handleDropOnBox = (e) => {
    if (!e.target.classList.contains('box')) return
    const droppedPosition = { letter: e.target.getAttribute('data-letter'), number: parseInt(e.target.getAttribute('data-number')) }
    if (checkValidPosition(droppedPosition)) {
      setShips(oldShips => {
        const newShips = oldShips.map(sh => {
          if (sh.id === selectedShip.id) return { ...sh, position: droppedPosition }
          return { ...sh }
        })

        return newShips
      })
      setSelectedShip(null)
    }
  }

  const handleDropOnReset = () => {
    setShips(oldShips => {
      const newShips = oldShips.map(sh => {
        if (sh.id === selectedShip.id) return { ...sh, position: null }
        return { ...sh }
      })

      return newShips
    })
  }

  return (

    <div className='board-container'>
      <table className='board-game'>
        <tbody>
          {
            numbers.map((number, i) => {
              return (
                <tr key={'tr-' + i}>
                  {
                    letters.map((letter, j) => {
                      return (
                        <td className='box' key={'box-' + j} data-letter={letter} data-number={number} onClick={() => handleBoxClick({ letter, number })} onDrop={handleDropOnBox} onDragOver={(e) => { e.stopPropagation(); e.preventDefault() }}>
                          {number === 1 && (<span className='info letter'>{letter}</span>)}
                          {letter === 'A' && (<span className='info number'>{number}</span>)}
                          {
                            ships.filter(ship => ship.position?.letter === letter && ship.position?.number === number).map(ship => {
                              return (
                                <Ship ship={ship} key={ship.id} />
                              )
                            })
                          }
                          {
                            hits.filter(hit => hit.position.letter === letter && hit.position.number === number).map(hit => {
                              return (
                                <span className={'marker ' + (hit.hit ? 'hit' : 'missed')} key={hit.id}>X</span>
                              )
                            })
                          }
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>

      {
            !shipsFixed && (
              <>
                <div className='ships-no-fixed' onDrop={handleDropOnReset} onDragOver={(e) => { e.stopPropagation(); e.preventDefault() }}>
                  {
                    ships.filter(ship => ship.position === null).map(ship => {
                      return (<Ship ship={ship} key={ship.id} />)
                    })
                }
                </div>
                <div className='button-container'>
                  <button className='' onClick={handleFixShips}>Fijar barcos</button>
                </div>
              </>
            )
        }
      {
            shipsFixed && (
              <>
                <span className='hits-info' style={{ color: 'red' }}>
                  {
                        hits.filter(hit => hit.hit).length + ' toques en barcos'
                    }
                </span>
                <span className='missed-info' style={{ color: 'blue' }}>
                  {
                        hits.filter(hit => !hit.hit).length + ' toques en agua'
                    }
                </span>
                <span className='boats-info' style={{ color: 'yellowgreen' }}>
                  {
                        ships.filter(ship => ship.size > ship.hits).length + ' barcos restantes'
                    }
                </span>
              </>
            )
        }
      {
            ships.filter(ship => ship.size > ship.hits).length <= 0 && (
              <div className='button-container'>
                <button className='' onClick={resetGame}>Reiniciar</button>
              </div>
            )
        }
    </div>
  )
}
