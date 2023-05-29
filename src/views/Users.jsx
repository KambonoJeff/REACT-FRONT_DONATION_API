import React, { useState, useEffect } from 'react'
import axiosClient from '../axios-client';
import Table from "../components/Table";
const Users = ({ state })=>{

  const[load, setLoad]=useState([]);
  const[users ,setUsers]=useState([]);
  const[foods ,setFood]=useState([]);
  const food =()=>{
    axiosClient.get('/food').then((res)=>{
      setFood(res.data)})
      .catch(err => console.error(err));
   }
  const _users =()=>{
    axiosClient.get('/showusers').then((res)=>{
    console.log(res.data)
    setUsers(res.data)})
    .catch(err => console.error(err));
   }
  useEffect(()=>{
     food();
   },[]);
  useEffect(()=>{
     _users();
   },[]);

  return (
    <div>
      <h2></h2>
      <Table food={foods} users={users} state={state}/>
    </div>
  )
}


export default Users

  