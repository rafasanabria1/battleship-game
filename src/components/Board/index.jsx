import { useEffect, useState } from 'react'
import { Ship } from '../Ship'
import { v1 as uuid } from 'uuid'
import './index.css'

export const Board = () => {
  const orientations = {
    COLUMN: 'column',
    ROW: 'row'
  }
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  const [ships, setShips] = useState([])
  const [hits, setHits] = useState([])

  useEffect(() => {
    setShips([
      {
        size: 3,
        orientation: orientations.ROW,
        position: {
          letter: 'A',
          number: 3
        },
        hitted: [

        ],
        id: 1
      },
      {
        size: 1,
        orientation: orientations.ROW,
        position: {
          letter: 'G',
          number: 6
        },
        hitted: [

        ],
        id: 2
      },
      {
        size: 5,
        orientation: orientations.COLUMN,
        position: {
          letter: 'F',
          number: 1
        },
        hitted: [

        ],
        id: 3
      }
    ])
  }, [])

  useEffect(() => {
    // console.log(hits)
  }, [hits])

  const checkHit = (letter, number) => {
    return ships.filter(ship => {
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

  const handleClick = (letter, number) => {
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
                                    <td className='box' key={'box-' + j} data-letter={letter} data-number={number} onClick={() => handleClick(letter, number)}>
                                      {number === 1 && (<span className='info letter'>{letter}</span>)}
                                      {letter === 'A' && (<span className='info number'>{number}</span>)}
                                      {
                                        ships.filter(ship => ship.position.letter === letter && ship.position.number === number).map(ship => {
                                          return (
                                            <Ship orientation={ship.orientation} size={ship.size} key={ship.id} />
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
    </div>
  )
}
