import React from 'react'

const Button = ({ text, setter  }) => {
  return (
    <button align='center' onClick={setter} className='btn'>{text}</button>
  )
}

export default Button
