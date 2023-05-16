import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import axiosClient from '../axios-client';
import { useStateContext } from '../components/contexts/ContextProvider'


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState()
  const {setUser, setToken} = useStateContext()

  const onSubmit=(event)=>{
    event.preventDefault()
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,

    }
    axiosClient.post("/login",payload).then(
      ({data})=>{
        setUser(data.user)
        setToken(data.token)
        
      }
    ).catch(err=>{
      const res = err.response;
      if(res && res.status === (401||403||404)){
        setErrors(res.data.errors)

      }
    })

  }
  return (
    < >
    <br></br>
   <form align="center" onSubmit={onSubmit} method="post">
   <h2>Login Form </h2>      
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
            <h2 align="center">{errors}</h2>
          <input ref={emailRef} type="email" placeholder='Enter your Email' />
          <input ref={passwordRef} type="password" placeholder='Enter your Password' />


          <Button align="center" text='Login'/>
          <p align="center">
            Not Registered ? <a href="/register">Register Now</a>
          </p>
          </div>
          
   </form>
 </>
  )
}
