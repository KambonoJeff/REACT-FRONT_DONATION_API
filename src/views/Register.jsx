import React, { useRef } from 'react'
import Button from '../components/Button'
import axiosClient from '../axios-client';
import { useStateContext } from '../components/contexts/ContextProvider'


////////////////////////////////////////////////////////////
export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setUser,setToken} = useStateContext()

  const onSubmit=(event)=>{
    event.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    console.log(payload);
    axiosClient.post('/signup',payload).then(({data})=>{
      setUser(data.user)
      setToken(data.token)
    }).catch
    (err=>{
      const response = err.response;
      if(response && response.status === (422 || 500 || 404) ){
        console.log(response.data.errors);
      }
    })


  }
  return (
    <>
    <form align="center" onSubmit={onSubmit} method="post">
    <h2 align="center"> Register Form</h2>

      <div className="form-control">
          <input ref={nameRef} type="text" placeholder='fullname'/>
          <input ref={emailRef} type="email" placeholder='Enter Email'/>
          <input ref={passwordRef} type="password" placeholder='Password'/>
          <input ref={passwordConfirmationRef} type="password" placeholder='Password Confirmation'/>
      </div>
      
      <Button align="center" text='Register'/>

      <p align="center">Already have an account? 
        <a href="/login">Login </a>
      </p>
    </form>    
  </> 

  )
}
