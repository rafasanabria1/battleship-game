import './index.css'

export const Ship = ({ size, orientation, position }) => {
  return (
    <span className={'ship size-' + size + ' ' + orientation} />
  )
}
