import React, { useRef, useState } from 'react'
import Button from './Button';
import axiosClient from '../axios-client';
import { useStateContext } from './contexts/ContextProvider';

////////////////////////////////////////////////////////////
export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const typeRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState()

  const {setUser,setToken} = useStateContext()

  const onSubmit=(event)=>{
    event.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      type: typeRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/register',payload).then(({data})=>{
      console.log(data)
      setUser(data.user)
      setToken(data.token)
    }).catch
    (err=>{
      const response = err.response;
      if(response && response.status === (422 || 500 || 404) ){
        console.log(response.data.errors)
        setErrors(response.data.errors)

      };
    })


  }
  return (
    <>
    <form align="center" onSubmit={onSubmit} method="post">
    <h2 align="center">Register Now For Free</h2>

    {
            errors &&
            <div className="alert">
              {
                Object.keys(errors).map(key =>(
                  <h2 align="center" key={key}>
                    {errors[key][0]}
                  </h2>
                ))
              }


            </div>
            
          }
      <div className="form-control">
          <input ref={nameRef} type="text" placeholder='FullName'/>
          <input ref={emailRef} type="email" placeholder='Enter Email'/>
          <input ref={typeRef} type="text" placeholder='Type of user?[ HOspitality || Other]'/>
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
