import './index.css'

export const Layout = props => {
  return (
    <div className='wrapper-layout'>
      <div className='layout'>
        {props.children}
      </div>
    </div>
  )
}
