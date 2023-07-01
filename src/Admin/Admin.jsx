import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../components/contexts/ContextProvider';
import axiosClient from '../axios-client';

export default function Admin() {

  let navigate = useNavigate();
  const nameRef = useRef();
  const emailRef=useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setAdmin, setToken} = useStateContext();
  const  [error , setError] = useState();


    const onSubmit = (event)=>{
      event.preventDefault();
      const payload = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password:passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value,
      }
      console.log(payload)
      axiosClient.post('/admin/login', payload).then(({data})=>{
        console.log(data)
        setAdmin("Admin :: ", data.name);
        setToken("TOKEN ::", data.token);

      }).catch((err)=>{
        console.log(err)
        setError("error from back ::", err)
      })

    }
  return (
    <>
       <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="brd-w">
      
   <form align="center" onSubmit={onSubmit} method="post">
   <h2>Admin Login Form </h2>
   <h5>{ error }</h5>      
   
          <div className="form-control">
          <input ref={emailRef} type="email" placeholder='Enter your Email' />
          <input ref={nameRef} type="name" placeholder='Enter your name' />
          <input ref={passwordRef} type="password" placeholder='Enter your Password' />
          <input ref={passwordConfirmationRef} type="password" placeholder='Enter your Password' />

          <button  className="btn" type="submit"> Login </button>
          <button className='btn' onClick={()=>{navigate(-1)}}> Back </button>
          <br />
          
          <br />
          
          </div>
          
          
          
   </form>
   
   </div>
    </>
  )
}
