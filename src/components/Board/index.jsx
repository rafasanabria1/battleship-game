import './index.css'

export const Board = () => {
  const board = new Array(64).fill(0)

  return (
    <div className='board-container'>

      <div className='board-letter-row'>
        <div className='board-field letter'>A</div>
        <div className='board-field letter'>B</div>
        <div className='board-field letter'>C</div>
        <div className='board-field letter'>D</div>
        <div className='board-field letter'>E</div>
        <div className='board-field letter'>F</div>
        <div className='board-field letter'>G</div>
        <div className='board-field letter'>H</div>
      </div>
      <div className='board-number-column'>
        <div className='board-field number'>1</div>
        <div className='board-field number'>2</div>
        <div className='board-field number'>3</div>
        <div className='board-field number'>4</div>
        <div className='board-field number'>5</div>
        <div className='board-field number'>6</div>
        <div className='board-field number'>7</div>
        <div className='board-field number'>8</div>
      </div>
      <div className='board'>
        {
        board.map((value, index) => {
          return <div key={'board-field' + index} className='board-field' />
        })
      }
      </div>
    </div>
  )
}
