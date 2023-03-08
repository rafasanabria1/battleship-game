import { useContext } from 'react'
import BattleShipContext from '../../contexts/BattleShipContext'
import { orientations } from '../../utils'
import './index.css'

export const Ship = ({ ship }) => {
  const { setShips } = useContext(BattleShipContext)

  const handleChangeOrientation = () => {
    setShips(oldShips => {
      const newShips = oldShips.map(sh => {
        if (sh.id === ship.id) return { ...sh, orientation: sh.orientation === orientations.COLUMN ? orientations.ROW : orientations.COLUMN }
        return { ...sh }
      })

      return newShips
    })
  }

  const handleDragStart = (e) => {
    console.log('hola')
    console.log(e)
    changeSelected(true)
  }

  const handleDragEnd = (e) => {
    console.log('adios')
    console.log(e)
    changeSelected(false)
  }

  const changeSelected = (selected) => {
    setShips(oldShips => {
      const newShips = oldShips.map(sh => {
        if (sh.id === ship.id) return { ...sh, selected }
        return { ...sh }
      })

      return newShips
    })
  }

  return (
    <span className={'ship size-' + ship.size + ' ' + ship.orientation} onClick={handleChangeOrientation} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
  )
}
