import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';

export default function NgoUpdate() {
    const id = useParams();
    const ngo = {
        id:null,
        name:'',
        email:'',
        location:'',
        beneficiaries:'',

    }
    const [load ,setLoad]= useState(false);
    if(id){
        setLoad(true)
        axiosClient.get(`/showngo/${id}`).then(({data})=>{
            setLoad(false)
            console.log(data)
        }).catch((err)=>{
            setLoad(false)
            console.log(err)
        })
    }
  return (
    <>
      <br />
        {ngo.id && <h2 align='center'> Ngo Name:  {ngo.name}</h2>}
        {load &&  <h3 align='center'>  Loading . . . </h3>}
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <input placeholder='cereals' value={ngo.cereals} onChange={event => setngo({...ngo , cereals: event.target.value})} />
            <input placeholder='proteins' value={ngo.proteins} onChange={event => setngo({...ngo , proteins: event.target.value})} />
            <input placeholder='legumes' value={ngo.legumes} onChange={event => setngo({...ngo , legumes: event.target.value})} />
            <input placeholder='breakfast' value={ngo.breakfast} onChange={event => setngo({...ngo , breakfast: event.target.value})} />
            <input placeholder='snacks' value={ngo.snacks} onChange={event => setngo({...ngo , snacks: event.target.value})} />
            <button className='btn' align='center'> SAVE </button>
            <Link to='/ngos/ngo' className='btn'> Back </Link> 
            </div>
        
        
        </form>


    </>
  )
}
