import React from 'react'

const LinkButton = ({ text, link }) => {
  return (
    <button className="btn"><a href={ link }/>{text}</button>
  )
}

export default LinkButton
