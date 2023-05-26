import React, { useState, useEffect } from 'react'
import axiosClient from '../axios-client';
import Table from "../components/Table";

export default function Users() {

  const[users, setUsers]= useState([]);
  const[load, setLoad]=useState([]);
  const[foods ,setFood]=useState([]);
  const caller =()=>{
    axiosClient.get('/food').then((res)=>{
      console.log(res)
       }).catch(err => console.error(err));
  }
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
  useEffect(()=>{
    getUsers();
  },[]);
  useEffect(()=>{
    caller();
  },[]);
  return (
    <div>
      <h2>users</h2>
      <Table food={foods}/>
    </div>
  )
}
