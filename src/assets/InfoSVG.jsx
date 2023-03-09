import * as React from 'react'

export const InfoSVG = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-exclamation-circle'
    width={24}
    height={24}
    strokeWidth={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M0 0h24v24H0z' stroke='none' />
    <path d='M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M12 9v4M12 16v.01' />
  </svg>
)
