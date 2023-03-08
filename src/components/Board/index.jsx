import { useState } from 'react'
import { Ship } from '../Ship'
import './index.css'

export const Board = () => {
  const [ships, setShips] = useState({
    ship1: {
      size: 3,
      orientation: 'row',
      position: {
        letter: 'A',
        number: 3
      }
    },
    ship2: {
      size: 1,
      orientation: 'row',
      position: {
        letter: 'G',
        number: 6
      }
    },
    ship3: {
      size: 5,
      orientation: 'column',
      position: {
        letter: 'F',
        number: 1
      }
    }
  })

  return (

    <div className='board-container'>
      <table className='board-game'>
        <tbody>
          <tr>
            <td className='box'>
              <span className='info letter'>A</span>
              <span className='info number'>1</span>
            </td>
            <td className='box'>
              <span className='info letter'>B</span>
            </td>
            <td className='box'>
              <span className='info letter'>C</span>
            </td>
            <td className='box'>
              <span className='info letter'>D</span>
            </td>
            <td className='box'>
              <span className='info letter'>E</span>
            </td>
            <td className='box'>
              <span className='info letter'>F</span>
            </td>
            <td className='box'>
              <span className='info letter'>G</span>
            </td>
            <td className='box'>
              <span className='info letter'>H</span>
            </td>
          </tr>
          <tr>
            <td className='box'><span className='info number'>2</span></td>
            <td className='box'><div className='ship' /></td>
            <td className='box' />
            <td className='box' />
            <td className='box'><Ship orientation='column' size={4} /></td>
            <td className='box' />
            <td className='box' />
            <td className='box' />
          </tr>
          <tr>
            <td className='box'><span className='info number'>3</span></td>
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
          </tr>
          <tr>
            <td className='box'><span className='info number'>4</span></td>
            <td className='box' />
            <td className='box'><Ship orientation='row' size={1} /></td>
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
          </tr>
          <tr>
            <td className='box'><span className='info number'>5</span></td>
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
          </tr>
          <tr>
            <td className='box'><span className='info number'>6</span></td>
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box'><Ship orientation='row' size={3} /></td>
            <td className='box' />
            <td className='box' />
            <td className='box' />
          </tr>
          <tr>
            <td className='box'><span className='info number'>7</span></td>
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
          </tr>
          <tr>
            <td className='box'><span className='info number'>8</span></td>
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
            <td className='box' />
          </tr>
        </tbody>
      </table>
    </div>
  )
}
