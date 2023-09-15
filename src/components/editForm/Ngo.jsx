import React, { useRef } from 'react'
import axiosClient from '../../axios-client';
import {  Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

export default function Ngo() {
  const nameRef = useRef();
  const emailRef = useRef();
  const locationRef = useRef();
  const beneficiariesRef = useRef();
  const phonenumberRef = useRef();
  const licenseNoRef = useRef();
  const licenseNo_confirmationRef = useRef();
  const {setType, type}=useStateContext();
  let navigate = useNavigate();


  const onSubmit = (event)=>{
    event.preventDefault()
  const payload={
      name : nameRef.current.value,
      email : emailRef.current.value,
      location : locationRef.current.value,
      beneficiaries : beneficiariesRef.current.value,
      phonenumber : phonenumberRef.current.value,
      licenseNo : licenseNoRef.current.value,
      licenseNo_confirmation : licenseNo_confirmationRef.current.value,
    }
    console.log('This the Payload',payload)
    axiosClient.post('/ngo/register',payload).then((res)=>{
      
      console.log('This the response',res);
      setType(res.type)
    
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
    <br />
    <br />

    <div className="brd">
            <h2 align='center'> NEW NGO </h2>
     
     <form action="" onSubmit={onSubmit} method="post">
       <div className="form-control">
       <input ref={nameRef} type="text" name="name" id="name" placeholder='Enter The NGO Name'/>

       </div>

       <div className="form-control">
       <input ref={emailRef} type="email" name="email" placeholder='Enter Your Email' />

       </div>

       <div className="form-control">
       <input type="text" name="location" ref={locationRef}placeholder='Location' />

       </div>

       <div className="form-control">
       <input type="number" name="beneficiaries" id="beneficiaries" placeholder='beneficiaries' ref={beneficiariesRef} />

       </div>
       <div className="form-control">
       <input type="number" name="phonenumber" id="phonenumber" placeholder='phonenumber' ref={phonenumberRef} />

       </div>
       <div className="form-control">
       <input type="number" name="licenseNo" id="licenseNo" placeholder='licenseNo' ref={licenseNoRef} />
       <input type="number" name="licenseNo_confirmation" id="licenseNo_confirmation" placeholder='licenseNo_confirmation' ref={licenseNo_confirmationRef} />

       </div>
  
       <button align='center' type="submit"  className="btn"> Add Ngo </button>
       <Link to={'/users/ngo'} className='btn'>Back</Link>
     </form>
     <br />

     </div>
    </>
  )
}
