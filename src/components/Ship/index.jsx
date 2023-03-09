import { useContext } from 'react'
import BattleShipContext from '../../contexts/BattleShipContext'
import { orientations } from '../../utils'
import './index.css'

export const Ship = ({ ship }) => {
  const { setShips, setSelectedShip, shipsFixed } = useContext(BattleShipContext)

  const handleClick = (e) => {
    console.log(e.target.parentElement.classList)
    if (shipsFixed) return

    setShips(oldShips => {
      const newShips = oldShips.map(sh => {
        if (sh.id === ship.id) return { ...sh, orientation: sh.orientation === orientations.COLUMN ? orientations.ROW : orientations.COLUMN }
        return { ...sh }
      })

      return newShips
    })
  }

  return (
    <span className={'ship size-' + ship.size + ' ' + ship.orientation} onClick={handleClick} draggable onDragStart={() => setSelectedShip(ship)} />
  )
}
