import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const Ngo = () => {
  const [ngo , setNgo] = useState([]);
const {type} = useStateContext()
let navigate = useNavigate();
  const _ngo =()=>{
    axiosClient.get('/ngo/show').then((res)=>{
        console.log(res.data[0].data)
    setNgo(res.data[0].data)
    })
    .catch(err => console.error(err));
   }
   useEffect(()=>{
    _ngo()
   },[])
   const onDelete=(data)=>{
    if(type!=='admin'){
        window.alert('ONLY ADMIN CAN DELETE!')
    }else{
        if(!window.confirm('Are You sure You want to delete this!?')){
            return
        }else{
            axiosClient.delete(`/ngo/delete/ ${data.id}`).then((res)=>{console.log(res); _ngo();}).catch((err)=>{
                console.log(err)
            })
        }
    }
   }
  return (
    <>
       {type==='admin' && 
        <Link className='btn-green' to={'/ngo/show/new'}>Add NGO</Link>
       }
       <br />
       <br />
       <br />
              <h2 align='center'>NGO Table</h2>
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
                            <button onClick={event=>onDelete(data)} className='btn-red'>Delete</button>

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

export default Ngo
