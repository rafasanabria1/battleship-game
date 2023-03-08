import { orientations } from '../../utils'
import './index.css'

export const Ship = ({ ship }) => {
  const handleChangeOrientation = () => {
    ship.orientation = ship.orientation === orientations.COLUMN ? orientations.ROW : orientations.COLUMN
  }

  return (
    <span className={'ship size-' + ship.size + ' ' + ship.orientation} onClick={handleChangeOrientation} />
  )
}
