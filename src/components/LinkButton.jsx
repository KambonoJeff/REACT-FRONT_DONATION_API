import React from 'react'

const LinkButton = ({ text, link, state }) => {
  return (
    <button className="btn" statet={state}><a href={ link }/>{text}</button>
  )
}

export default LinkButton
