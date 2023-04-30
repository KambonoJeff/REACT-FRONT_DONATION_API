import React from 'react'
import { Outlet } from 'react-router'
import { useStateContext } from './contexts/ContextProvider'
import Users from '../views/Users'
export default function GeustLayout() {
  const {token} = useStateContext()
  if(token){
    return <Users/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}
