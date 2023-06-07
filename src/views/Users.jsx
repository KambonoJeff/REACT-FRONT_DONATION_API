import React, { useState } from 'react'
import axiosClient from '../axios-client';
import { Link } from 'react-router-dom';

const Users = ({state})=>{
  // const [state, setState] = useState('FOOD')

  const[load, setLoad]=useState([]);
  const [requests , setRequests] =useState([]);


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

  