import React, { useState, useEffect, useCallback } from 'react'
import axiosClient from '../axios-client';
import Table from "../components/Table";
import Dashboard from './Dashboard';

const Users = ()=>{
  const [state, setState] = useState('FOOD')

  const[load, setLoad]=useState([]);
  const [requests , setRequests] =useState([]);
  const[users ,setUsers]=useState([]);
  const [ngo , setNgo] = useState([]);
  const[foods ,setFood]=useState([]);
  const food =()=>{
    axiosClient.get('/food').then((res)=>{
      setFood(res.data)})
      .catch(err => console.error(err));
   }
  const _users =()=>{
    axiosClient.get('/showusers').then((res)=>{
    setUsers(res.data)})
    .catch(err => console.error(err));
   }
  const _ngo =()=>{
    axiosClient.get('/ngo/show').then((res)=>{
    setNgo(res.data)
    })
    .catch(err => console.error(err));
   }
  const _requests =()=>{
    axiosClient.get('/PostRequest').then((res)=>{
    console.log(res.data)
    setRequests(res.data)})
    .catch(err => console.error(err));
   }
  //######################################################
    if(state === 'FOOD'){
         useCallback(()=>{
         food();

         },[])
      }
      else if(state === 'USERS'){
          _users();
      }
      else if(state === 'NGO'){
          _ngo();
      }
      else if(state === 'REQUESTS'){
          _requests();
      }
   //###########################################################
  return (
    <div>
      <h2></h2>
      <Table food={foods} users={users} requests={requests} ngo={ngo} state={state}/>
    </div>
  )
}


export default Users

  