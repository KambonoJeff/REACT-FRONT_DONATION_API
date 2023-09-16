import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';

const UserTable = () => {
  const[users ,setUsers]=useState([]);
  let navigate = useNavigate();
  const [load,setLoad]=useState()
  const _users =()=>{
    setLoad(true)
    axiosClient.get('/showusers').then((res)=>{
        setLoad(false)
        console.log(res.data)
    setUsers(res.data.data)})
    .catch((err)=>{
        setLoad(false)
        console.error(err)
    });
   }
   useEffect(()=>{
    _users()
   },[])
   const onDelete=(user)=>{
    if(!window.confirm('Are You Sure You want to Delete')){
        return
    }else{
        setLoad(true)
        axiosClient.delete(`/showusers/${user.id}`).then((res)=>{setLoad(false);console.log(res); _users();}).catch((err)=>{setLoad(false);console.log(err)})
    }
   }
  return (
    <>
          <br/> 
            <h2 align='center'>USERS table</h2>
            <br/>   

            <Link  align='right' className='btn-green' to={'/users/new'}>Add User</Link>
            <br/>  
            {load && <h4 align='center'> Loading . . . </h4>} 
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
                                <td>{user.created_at}</td>
                                <td className='flex'>
                                <Link className='btn' to={'/user/update/'+ user.id}>Edit</Link>
                                    <button onClick={event=>onDelete(user)} className='btn'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
                </table>
                <br />
                <button className='btn' onClick={()=>navigate(-1)}>Back</button>
    </>
  )
}

export default UserTable
