import React, { useState , useCallback} from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [state , setState]= useState('FOOD');
  const _food = useCallback(()=>{
    setState('FOOD');
    console.log(state)

    },[])
  const _ngo = useCallback(()=>{
    setState('NGO');
    console.log(state)

    },[])
  const _users = useCallback(()=>{
    setState('USERS');
    console.log(state)

    },[])
  const _requests = useCallback(()=>{
    setState('REQUESTS');
    console.log(state)

    },[])
  return (
    <div>
      <br />
      <div className="box">
          <h3 align="center">Dashboard</h3>
          <h3 align="center">Hello user welcome to the food donation management system we are happy to have you here and would wish to tell you alittle about us</h3>
          <div className="flex box mg-t">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laudantium, quas voluptates ab ipsa nisi esse nobis iusto, fugit molestiae aliquid? Nostrum facilis dicta obcaecati velit non animi porro ut.</p>
              <div className="image">
                <img src="../Assets/img/image1.jpg" alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio?" />
              </div>
          </div>
          <div className="flex box mg-t">

              <div className="image">
                <img src="../Assets/img/image1.jpg" alt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio?" />
              </div>
              <p align="right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laudantium, quas voluptates ab ipsa nisi esse nobis iusto, fugit molestiae aliquid? Nostrum facilis dicta obcaecati velit non animi porro ut.</p>
          </div>
          <div className="flex box mg-t">
            <Link className='link' to="/users"  state={state} onClick={_food}>Food </Link>
            <Link className='link' to="/users" onClick={_users} state={state}>Users</Link>
            <Link className='link' to="/users" onClick={_ngo} state={state}>Ngo</Link>
            <Link className='link' to="/users" onClick={_requests} state={state}>Requests</Link> 
            

          </div>
      </div>
    </div>
  )
}
 