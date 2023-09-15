import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import { Link, useNavigate } from 'react-router-dom';


const Requests = () => {
  const [requests , setRequests] =useState([]);
  let navigate = useNavigate();
  const [load,setLoad]=useState();
  const _requests =()=>{
    setLoad(true)
    axiosClient.get('/PostRequest').then((res)=>{
        setLoad(false)
    setRequests(res.data.data)})
    .catch((err)=>{
        setLoad(false)
        console.log('error occured while making the request',err)
    });
   }
   useEffect(()=>{
    _requests()
   },[])
   const onDelete=(data)=>{
    if(!window.confirm('Are You Sure You Want to delete?')){
        return
    }else{
        setLoad(true)
        axiosClient.delete(`/PostRequest/${data.id}`)
        .then((res)=>{
            setLoad(false)
            console.log(res); _requests()
        }).catch((Err)=>{setLoad(false); console.log(Err)})
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
              {load && <h4 align='center'>Loading . . .</h4>}  
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
                                  <Link className='btn' to={'/request/update/'+ data.id}>Edit</Link>
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
