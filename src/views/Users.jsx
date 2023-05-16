import React, { useState, useEffect } from 'react'
import axiosClient from '../axios-client';

export default function Users() {

  const[users, setUsers]= useState([]);
  const[load, setLoad]=useState([]);
  useEffect(()=>{

    getUsers();
  },[]);

    const getUsers = ( )=>{
      setLoad(true)
      axiosClient.get('/user').then(({data})=>{
       setLoad(false)
        setUsers(data)
      }).catch((err)=>{
        setLoad(false)
        console.error(err)
      })
    }




  return (
    <div>
      <h2>users</h2>
    </div>
  )
}
