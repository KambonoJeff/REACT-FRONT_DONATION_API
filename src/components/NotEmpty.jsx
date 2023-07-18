import React from 'react'
import { useStateContext } from './contexts/ContextProvider'

export default function NotEmpty() {
  const {user, admin,ngo}=useStateContext();
  console.log('return v')
  return (
    <div>
      
    </div>
  )
}
