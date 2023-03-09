import { useContext } from 'react'
import BattleShipContext from '../../contexts/BattleShipContext'
import { letters, numbers, orientations } from '../../utils'
import './index.css'

export const Ship = ({ ship }) => {
  const { setShips, setSelectedShip, shipsFixed } = useContext(BattleShipContext)

  const handleClick = (e) => {
    if (!shipsFixed) {
      if (ship.position && ship.size > 1 && ship.orientation === orientations.COLUMN) {
        const shipLetterPositionStart = letters.indexOf(ship.position.letter)
        const shipLetterPositionEnd = shipLetterPositionStart + ship.size
        if (shipLetterPositionEnd > letters.length) return
      } else if (ship.position && ship.size > 1 && ship.orientation === orientations.ROW) {
        const shipNumberPositionStart = numbers.indexOf(ship.position.number)
        const shipNumberPositionEnd = shipNumberPositionStart + ship.size
        if (shipNumberPositionEnd > numbers.length) return
      }

      setShips(oldShips => {
        const newShips = oldShips.map(sh => {
          if (sh.id === ship.id) return { ...sh, orientation: sh.orientation === orientations.COLUMN ? orientations.ROW : orientations.COLUMN }
          return { ...sh }
        })

        return newShips
      })
    }
  }

  return (
    <span className={`ship size-${ship.size} ${ship.orientation} ${shipsFixed ? 'position-fixed' : ''} ${ship.hits === ship.size ? 'sunk' : ''}`} onClick={handleClick} draggable onDragStart={() => setSelectedShip(ship)} />
  )
}
