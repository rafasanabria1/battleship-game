import './index.css'
import { ShipSVG } from '../../assets/ShipSVG'

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <ShipSVG width={40} height={40} />
        </div>
        <div className='title'>
          Battle Ship - Game
        </div>
      </div>
    </header>
  )
}
