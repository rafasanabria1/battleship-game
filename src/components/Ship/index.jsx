import './index.css'

export const Ship = ({ size, orientation }) => {
  return (
    <span className={'ship size-' + size + ' ' + orientation} />
  )
}
