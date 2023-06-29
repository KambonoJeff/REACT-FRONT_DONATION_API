import React, { useCallback, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';

export default function NgoUpdate() {
    const {id} = useParams();
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
    if({id}){
    
        useCallback(()=>{
                setLoad(true)
                axiosClient.get(`/showngo/${id}`).then(({data})=>{
                    setLoad(false)
                    console.log(data)
                }).catch((err)=>{
                    setLoad(false)
                    console.log(err)
                })


        },[])
    }
    
   
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
            <Link to='/ngos/ngo' className='btn'> Back </Link> 
            </div>
        
        
        </form>


    </>
  )
}
