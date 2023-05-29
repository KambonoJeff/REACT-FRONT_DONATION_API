import React, { useState, useEffect } from 'react'
import axiosClient from '../axios-client';
import Table from "../components/Table";
const Users = ({ state })=>{

  const[load, setLoad]=useState([]);
  const[foods ,setFood]=useState([]);
  const caller =()=>{
     axiosClient.get('/food').then((res)=>{
       setFood(res.data)
        }).catch(err => console.error(err));
   }
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

  