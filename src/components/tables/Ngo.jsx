import React, { useEffect, useState } from 'react'
import Button from '../Button'
import axiosClient from '../../axios-client';
import { Link } from 'react-router-dom';

const Ngo = () => {
  const [ngo , setNgo] = useState([]);
  const _ngo =()=>{
    axiosClient.get('/ngo/show').then((res)=>{

    setNgo(res.data.data)
    })
    .catch(err => console.error(err));
   }
   useEffect(()=>{
    _ngo()
   },[])
  return (
    <>
              <h2 align='center'>NGO table</h2>
        <br/>   
            <table>
        
            <thead className="thead">             
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>email</th>
                <th>location</th>
                <th>beneficiaries</th>
                <th>other</th>
            </tr>     
            </thead>
            <tbody>
                {
                    ngo.map((data, index)=>(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.location}</td>
                            <td>{data.beneficiaries}</td>
                            <td className='flex'>
                            <Link className='btn' to='/users/data.id'>Edit</Link>
                                <Button text='Del'/>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
            </table>

    </>
  )
}

export default Ngo
