import './index.css'
import { Ship } from '../Ship'
import { v1 as uuid } from 'uuid'
import { orientations, letters, numbers } from '../../utils'
import { useContext } from 'react'
import BattleShipContext from '../../contexts/BattleShipContext'

export const Board = () => {
  const { ships, setShips, hits, setHits, shipsFixed, setShipsFixed, selectedShip, setSelectedShip } = useContext(BattleShipContext)

  const checkHit = (letter, number) => {
    return ships.filter(ship => {
      if (!ship.position) return false
      if (ship.size === 1) return ship.position.letter === letter && ship.position.number === number
      else if (ship.orientation === orientations.COLUMN) {
        const shipNumberPositionStart = numbers.indexOf(ship.position.number)
        const shipNumberPositionEnd = shipNumberPositionStart + ship.size
        const hitNumberPosition = numbers.indexOf(number)

        return ship.position.letter === letter && hitNumberPosition >= shipNumberPositionStart && hitNumberPosition <= shipNumberPositionEnd
      } else if (ship.orientation === orientations.ROW) {
        const shipLetterPositionStart = letters.indexOf(ship.position.letter)
        const shipLetterPositionEnd = shipLetterPositionStart + ship.size
        const hitLetterPosition = letters.indexOf(letter)

        return ship.position.number === number && hitLetterPosition >= shipLetterPositionStart && hitLetterPosition <= shipLetterPositionEnd
      }
      return false
    }).length > 0
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

  const handleBoxClick = (letter, number) => {
    console.log({ letter, number })
    if (!shipsFixed) return
    if (hits.filter(hit => hit.position.letter === letter && hit.position.number === number).length > 0) return

    setHits(oldHits => [...oldHits, {
      position: {
        letter,
        number
      },
      hit: checkHit(letter, number),
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
                        <td className='box' key={'box-' + j} data-letter={letter} data-number={number} onClick={() => handleBoxClick(letter, number)} onDrop={handleDropOnBox} onDragOver={(e) => { e.stopPropagation(); e.preventDefault() }}>
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
            ships.filter(ship => ship.position === null).length > 0 && (
              <div className='ships-no-fixed'>
                {
                    ships.filter(ship => ship.position === null).map(ship => {
                      return (<Ship ship={ship} key={ship.id} />)
                    })
                }
              </div>
            )
        }
      {
            !shipsFixed && (
              <div className='button-container'>
                <button className='' onClick={handleFixShips}>Fijar barcos</button>
              </div>
            )
        }
    </div>
  )
}
