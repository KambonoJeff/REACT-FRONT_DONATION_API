import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider'
import Header from './Header'
import axiosClient from '../axios-client'


export default function DefaultLayout() {
  const {user,token} = useStateContext()
  const onLogout =(event)=>{
    event.preventDefault()
    localStorage.removeItem('ACCESS_TOKEN')
    axiosClient.get('/showusers').then(({data})=>{
      console.log(data)
    }).catch((err)=>{
      console.error(err)
    })
    

  }
  if(!token){
    return <Navigate to="/login"/>
  }
  return (
    <div className="flex">
      <Header  onLogout={onLogout} />
    <aside>

      <nav>
       {/* <Button setter={foodie}text='Food'/>
       <Button setter={ngoset}text='NGO'/>
       <Button setter={userss}text='USER'/>
       <Button setter={setrequests}text='Requests'/> */}

       {/* <link to="/dashboard">dashboard</link> */}
       {/* <LinkButton link='/dashboard' text='Dashboard'/> */}
       {/* <LinkButton link='/users' text='Users'/> */}

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
