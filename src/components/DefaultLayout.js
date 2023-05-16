import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider'
import Header from './Header'
import axiosClient from '../axios-client'


export default function DefaultLayout() {
  const {user,token, setToken, setUser} = useStateContext()
  if(!token){
    return <Navigate to="/login"/>
  }
//   useEffect(()=>{

//    axiosClient.get('/user')
//    .then(({data})=>
//    {
//      console.log(data)
//    }

//  )
//    },[]);

  const onLogout =(event)=>{
    event.preventDefault()
    axiosClient.post('/logout')
      .then(({data})=>{
        setUser(null)
        setToken(null)    
      }).catch((err)=>{
        console.error(err)
      })
      

    
    }


  return (
    <div className="flex">
      <Header  onLogout={onLogout}  />
    <aside>
      <nav>
       <Link className='link' to="/Dashboard">Dashboard</Link>
       <Link className='link' to="/users">Users</Link>
      </nav>
    </aside>
    <main>
      <h3>default layout</h3>
      <br></br>
      <br></br>
      <Outlet/>
      
    </main>

    </div>
    
  )
}
