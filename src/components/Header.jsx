import React from 'react'
import axiosClient from '../axios-client';
import { useEffect,useState } from 'react';


const Header = ({ user, onLogout }) => {
  const[users, setUsers]= useState([]);

  const getUsers = ( )=>{
    axiosClient.get('/user').then(({data})=>{
      console.log(data)
      setUsers(data)
    }).catch((err)=>{
      console.error(err)
    })
  }
  useEffect(()=>{
    getUsers();
  },[]);

  return (
    <header>
        
        <div>
            <ul className="flex box">
                <li ><a href="#" className="btn">{ users }</a></li>
                <li ><a href="#" onClick={onLogout} className="btn">Logout</a></li>
            </ul>
        </div>
      
    </header>
  )
}

export default Header
