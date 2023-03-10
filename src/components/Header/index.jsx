import './index.css'
import { ShipSVG } from '../../assets/ShipSVG'
import useUser from '../../hooks/useUser'
import { logout } from '../../firebase/client'

export const Header = () => {
  const user = useUser()
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
      {
            user && <button onClick={logout}>Logout</button>
        }
    </header>
  )
}
