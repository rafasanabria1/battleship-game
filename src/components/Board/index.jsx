import { useState } from 'react'
import { Ship } from '../Ship'
import { v1 as uuid } from 'uuid'
import './index.css'
import { orientations, letters, numbers } from '../../utils'

export const Board = () => {
  const [shipsFixed, setShipsFixed] = useState(false)
  const [hits, setHits] = useState([])
  const [ships, setShips] = useState([
    {
      size: 5,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 5,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 4,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 4,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 3,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    },
    {
      size: 2,
      orientation: orientations.ROW,
      position: null,
      hitted: [],
      selected: false,
      id: uuid()
    }
  ])

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
      } else return false
    }).length > 0
  }

  const handleBoxClick = (letter, number) => {
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
                        <td className='box' key={'box-' + j} data-letter={letter} data-number={number} onClick={() => handleBoxClick(letter, number)}>
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
          <div className='ships-no-fixed'>
            {
              ships.filter(ship => ship.position === null).map(ship => {
                return (<Ship ship={ship} key={ship.id} />)
              })
            }
          </div>
        )
      }
    </div>
  )
}
