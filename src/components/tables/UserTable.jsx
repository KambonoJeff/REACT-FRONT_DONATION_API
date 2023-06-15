import React, { useEffect, useState } from 'react'
import Button from '../Button'
import axiosClient from '../../axios-client';
import { Link } from 'react-router-dom';

const UserTable = () => {
  const[users ,setUsers]=useState([]);
  const _users =()=>{
    axiosClient.get('/showusers').then((res)=>{

    setUsers(res.data.data)})
    .catch(err => console.error(err));
   }
   useEffect(()=>{
    _users()
   },[])
   const onDelete=(user)=>{
    if(!window.confirm('Are You Sure You want to Delete')){
        return
    }else{
        axiosClient.delete(`/showusers/${user.id}`).then((res)=>{console.log(res); _users();}).catch((err)=>{console.log(err)})
    }
   }
  return (
    <>
          <br/> 
            <h2 align='center'>USERS table</h2>
            <br/>   
                <table>
            
                <thead className="thead">             
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>type</th>
                    <th>verifiedAT</th>
                    <th>other</th>
                </tr>     
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                <td>{user.email_verified_at}</td>
                                <td className='flex'>
                                <Link className='btn' to={'/users/'+ user.id}>Edit</Link>
                                    <button onClick={event=>onDelete(user)} className='btn'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
                </table>
    </>
  )
}

export default UserTable
