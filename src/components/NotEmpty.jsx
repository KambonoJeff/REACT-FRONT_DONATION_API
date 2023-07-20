import React from 'react'
import { useStateContext } from './contexts/ContextProvider'

export default function NotEmpty() {
  const {user, admin,ngo} = useStateContext();

  

  return (
    <div>
      <h2>not empty function</h2>
      <h1>{admin ? (<h1> trueee</h1>):(<h1> false</h1>)}</h1>
    </div>
  )
}
