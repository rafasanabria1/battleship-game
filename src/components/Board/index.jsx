import './index.css'

export const Board = () => {
  const board = new Array(64).fill(0)

  return (
    <div className='board-wrapper'>

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
