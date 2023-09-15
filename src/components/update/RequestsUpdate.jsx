import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../axios-client';

const RequestsUpdate = () => {
const {id}=useParams();
let navigate = useNavigate();
const [request,setRequest]=useState({
    id:null,
    typeoffood:'',
    quantity:'',
    beneficiaries:'',
    location:'',
    status:''

});

const [load,setLoad]=useState();
useEffect(()=>{
    setLoad(true)
    axiosClient.get(`/requests/${id}`).then(({data})=>{
        setLoad(false)
        setRequest(data)
    }).catch((err)=>{
        setLoad(false)
        console.log('error occured when reusting for an individual request',err)
    })
},[]);
const onSubmit = ( event )=>{
    event.preventDefault()
   
    setLoad(true)
    axiosClient.post(`PostRequest/${id}`,request)
    .then(({data})=>{
        setLoad(false)
        return <Navigate to="/users/requests"/>
    })
    .catch((err)=>{
        setLoad(false)
        console.log('An Error occured while making the request',err)
    })
   
}
  return (
    <>
      <br />
      {request.id && <h2 align='center'>Request Id : {request.id}</h2>}
      {load && <h3 align='center'> Loading . . . </h3>}
      <form onSubmit={onSubmit}>
        <div className="form-control">
            <input type="text" value={request.typeoffood} onChange={event => setRequest({...request, typeoffood: event.target.value})} />
            <input type="text" value={request.quantity} onChange={event => setRequest({...request, quantity: event.target.value })} />
            <input type="text" value={request.beneficiaries} onChange={event => setRequest({...request,beneficiaries:event.target.value})} />
            <input type="text" value={request.location} onChange={event=>setRequest({...request,location:event.target.value})} />
            <input type="text" value={request.status} readOnly />
            <button className='btn' align='center' type='submit'> SAVE </button>
            <Link className='btn' to={'/users/requests'}>Back</Link>
        </div>
      </form>
    </>
  )
}

export default RequestsUpdate
