import React, { useRef } from 'react'
import Button from '../components/Button'
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmit=(event)=>{
    event.preventDefault()

  }
  return (
    < >
    <br></br>
   <form align="center" onSubmit={onSubmit} method="post">
   <h2>Login Form </h2>      
          <div className="form-control">
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
