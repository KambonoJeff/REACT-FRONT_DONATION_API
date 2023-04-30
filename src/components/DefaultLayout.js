import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useStateContext } from './contexts/ContextProvider'
import Users from '../views/Users'
import Header from './Header'
import LinkButton from './LinkButton'
import Login from '../views/Login'


export default function DefaultLayout() {
  const {user,token} = useStateContext()
  if(!token){
    return <Login/>
  }
  const onLogout =(event)=>{
    event.preventDefault()
    console.log("clicked")
  }
  return (
    <div className="flex">
      <Header userinfo={user.name} onLogout={onLogout} />
    <aside>

      <nav>
       {/* <Button setter={foodie}text='Food'/>
       <Button setter={ngoset}text='NGO'/>
       <Button setter={userss}text='USER'/>
       <Button setter={setrequests}text='Requests'/> */}

       {/* <link to="/dashboard">dashboard</link> */}
       <LinkButton link='/dashboard' text='Dashboard'/>
       <LinkButton link='/users' text='Users'/>

      </nav>
    </aside>
    <main>
      <Outlet/>
      
    </main>

    </div>
    
  )
}
