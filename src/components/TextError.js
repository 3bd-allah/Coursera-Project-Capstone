import React from 'react'

const TextError = ({children}) => {
  return (
    <div className='d-flex text-danger mb-2'>
        {children}
    </div>
)
}

export default TextError