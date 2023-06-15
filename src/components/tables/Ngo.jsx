import React, { useEffect, useState } from 'react'
import Button from '../Button'
import axiosClient from '../../axios-client';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const Ngo = () => {
  const [ngo , setNgo] = useState([]);
const {admin} = useStateContext()

  const _ngo =()=>{
    axiosClient.get('/ngo/show').then((res)=>{

    setNgo(res.data.data)
    })
    .catch(err => console.error(err));
   }
   useEffect(()=>{
    _ngo()
   },[])
   const onDelete=(data)=>{
    if(!window.confirm('Are You sure You want to delete this!?')){
        return
    }else{
        axiosClient.delete(`/ngo/delete/ ${data.id}`).then((res)=>{console.log(res); _ngo();}).catch((err)=>{
            console.log(err)
        })
    }
   }
  return (
    <>
        <Link className='btn' to={'/ngo/show/new'}>Add NGO</Link>
              <h2 align='center'>NGO {admin}</h2>
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
                            <Link className='btn' to={'/ngo/show/'+data.id}>Edit</Link>
                                <button onClick={event=>onDelete(data)} className='btn'>Delete</button>

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
