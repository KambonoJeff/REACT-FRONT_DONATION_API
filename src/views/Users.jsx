import React, { useState } from 'react'
import axiosClient from '../axios-client';
import { Link } from 'react-router-dom';

const Users = ({state})=>{
  // const [state, setState] = useState('FOOD')

  const[load, setLoad]=useState([]);
  const [requests , setRequests] =useState([]);
  const[users ,setUsers]=useState([]);
  const [ngo , setNgo] = useState([]);
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

   //###########################################################
  return (
    <div>
      <br />
<h1>
users.jsx
  
  </h1>      <div align='right'>
        <Link className='btn' to="/users/adduser">Add User</Link>
      </div>
      <br />
    </div>
  )
}


export default Users

  