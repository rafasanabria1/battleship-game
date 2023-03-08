import './index.css'

export const Board = () => {
  return (
    <div className='board-container'>

      <table className='board-game'>
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
          <td className='box' />
          <td className='box' />
          <td className='box' />
          <td className='box' />
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
          <td className='box' />
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
          <td className='box' />
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
      </table>
    </div>
  )
}
