import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';


const Requests = () => {
  const [requests , setRequests] =useState([]);
  let navigate = useNavigate();
  const _requests =()=>{
    axiosClient.get('/PostRequest').then((res)=>{
    setRequests(res.data.data)})
    .catch(err => console.error(err));
   }
   useEffect(()=>{
    _requests()
   },[])
   const onDelete=(data)=>{
    if(!window.confirm('Are You Sure You Want to delete?')){
        return
    }else{
        axiosClient.delete(`/PostRequest/${data.id}`).then((res)=>{console.log(res); _requests();}).catch((Err)=>{console.log(Err)})
    }

   }
    const getRowStyle=(value)=>{
        if(value === 'NotApproved' ){
            return {
                borderLeft:'5px solid red',
                borderRadius:'10px',
                color:'red',
                fontWeight:'bold',
                borderRight:'5px solid red'
            };
        }else if(value ==='Pending'){
            return {
                borderLeft:'5px solid orange',
                borderRadius:'10px',
                color:'orange',
                fontWeight:'bold',
                borderRight:'5px solid orange'
            };
        }
        else if (value ==='Approved'){
            return {
                borderLeft:'5px solid green',
                borderRadius:'10px',
                color:'green',
                fontWeight:'bold',
                borderRight:'5px solid green'
            };
        }
    }

  return (
    <>
      <br/>   
              
              <h2 align='center'>Requests table</h2>

              <Link className='btn-green' to={'/PostRequest/new'}>Add Request</Link>
              <br/>   
              <br/>   
                  <table>
                 
                  <thead className="thead">             
                  <tr>
                      <th>ID</th>
                      <th>user_id</th>
                      <th>typeoffood</th>
                      <th>quantity</th>
                      <th>beneficiaries</th>
                      <th>location</th>
                      <th>status</th>
                      <th>other</th>
                  </tr>     
                  </thead>
                  <tbody>
                      {
                          requests.map((data, index)=>(
                              <tr key={index}>
                                  <td>{data.id}</td>
                                  <td>{data.user_id}</td>
                                  <td>{data.typeoffood}</td>
                                  <td>{data.quantity}</td>
                                  <td>{data.beneficiaries}</td>
                                  <td>{data.location}</td>
                                  <td style={getRowStyle((data.status))}>{data.status}</td>
                                  <td className='flex'>
                                  <Link className='btn' to={'/PostRequest/'+ data.id}>Edit</Link>
                                    <button onClick={event=>onDelete(data)} className='btn'>DELETE</button>
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

export default Requests
