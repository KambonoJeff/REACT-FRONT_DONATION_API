import React, {  useEffect, useState } from 'react'
import {  Navigate, useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

const NgoUpdate = ()=> {
    const {id} = useParams();
    let navigate = useNavigate();
    const{type}=useStateContext();

    const [ngo , setNgo] = useState(
        {
            id:null,
            name:'',
            email:'',
            location:'',
            beneficiaries:'',
    
        }
    );
    const [load ,setLoad]= useState(false);
    useEffect(()=>{
      if(type!=='admin'){
        window.alert('ONLY ADMIN CAN EDIT DATA!')
        return <Navigate to='users/ngo' />
      }else{
        setLoad(true)
                axiosClient.get(`/showngo/${id}`).then(({data})=>{
                    setLoad(false)
                    console.log(data[0])
                    setNgo(data[0])

                }).catch((err)=>{
                  console.log('something is wrong the request for an individual id is not successful', err)
                })
      }
        
    },[])
                


   
    const onSubmit=(event)=>{
        event.preventDefault()
    }
  return (
    <>
      <br />
        {ngo.id && <h2 align='center'> Ngo Name:  {ngo.name}</h2>}
        {load &&  <h3 align='center'>  Loading . . . </h3>}
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <input placeholder='name' value={ngo.name} onChange={event => setNgo({...ngo , name: event.target.value})} />
            <input placeholder='email' value={ngo.email} onChange={event => setNgo({...ngo , email: event.target.value})} />
            <input placeholder='location' value={ngo.location} onChange={event => setNgo({...ngo , location: event.target.value})} />
            <input placeholder='beneficiaries' value={ngo.breakfast} onChange={event => setNgo({...ngo , breakfast: event.target.value})} />
            <button className='btn' align='center'> SAVE </button>
            <button className='btn' onClick={()=>navigate(-1)}>Back</button>
            </div>
        
        
        </form>


    </>
  )
}

export default NgoUpdate