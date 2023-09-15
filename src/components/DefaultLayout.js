import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider'
import Header from './Header'
import axiosClient from '../axios-client'


export default function DefaultLayout() {

  const {user, admin,ngo,token, setToken,setAdmin,setNgo, setUser} = useStateContext()
  if(!token){
    return <Navigate to="/login"/>
  }
  const onLogout =(event)=>{
    event.preventDefault()
    axiosClient.post('/logout')
      .then(()=>{
        setUser(null)
        setToken(null)    
      }).catch((err)=>{
        console.error(err)
      })
    }


  return (
    <div className="flex">
      <Header  onLogout={onLogout}  />
    <main>
      <h3>default layout</h3>        
      <br></br>
      <br></br>
      <Outlet />
      
    </main>

    </div>
    
  )
}
