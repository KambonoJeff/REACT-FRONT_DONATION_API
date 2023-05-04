import React from 'react'
import { Navigate } from 'react-router-dom';

import { Outlet } from 'react-router'
import { useStateContext } from './contexts/ContextProvider'
export default function GeustLayout() {
  const {token} = useStateContext()
  if(token){
    return <Navigate to="/"/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}
