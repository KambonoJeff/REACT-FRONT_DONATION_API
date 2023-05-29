import React, { useState, useEffect } from 'react'
import axiosClient from '../axios-client';
import Table from "../components/Table";
const Users = ({ state })=>{

  const[users, setUsers]= useState([]);
  const[load, setLoad]=useState([]);
  const[foods ,setFood]=useState([]);
  const caller =()=>{
    axiosClient.get('/food').then((res)=>{
      console.log(res.data)
      setFood(res.data)
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
      <h2></h2>
      <Table food={foods} state={state}/>
    </div>
  )
}


export default Users

  