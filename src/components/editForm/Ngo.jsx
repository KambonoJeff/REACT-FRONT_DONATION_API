import React, { useRef } from 'react'
import axiosClient from '../../axios-client';

export default function Ngo() {
  const nameRef = useRef();
  const emailRef = useRef();
  const locationRef = useRef();
  const beneficiariesRef = useRef();

  const onSubmit = (event)=>{
    event.preventDefault()
    payload={
      name : nameRef.current.value,
      email : emailRef.current.value,
      location : locationRef.current.value,
      beneficiaries : beneficiariesRef.current.value,
    }
    console.log(payload)
    axiosClient.post('/ngo/register').then((res)=>{console.log(res)}).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
    <br />
    <br />

    
            <h2> Add NGO </h2>
     
     <form action="" onSubmit={onSubmit} method="post">
       <div className="form-control">
       <input ref={nameRef} type="text" name="name" id="name" placeholder='Enter The User Id'/>

       </div>

       <div className="form-control">
       <input ref={emailRef} type="email" name="email" placeholder='Enter Your Email' />

       </div>

       <div className="form-control">
       <input type="text" name="location" ref={locationRef}placeholder='Location' />

       </div>

       <div className="form-control">
       <input type="text" name="beneficiaries" id="beneficiaries" placeholder='beneficiaries' ref={beneficiariesRef} />

       </div>
  
       <button align='center' type="submit"  className="btn"> Add Ngo </button>
       <Link className='btn' to='/users/requests'>Back</Link>
     </form>
    </>
  )
}
