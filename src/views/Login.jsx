import React from 'react'
import InputDetail from '../components/InputDetail'
import Button from '../components/Button'
export default function Login() {
  const onSubmit=(event)=>{
    event.preventDefault()
  }
  return (
    < >
    <br></br>
   <form align="center" onSubmit={onSubmit} method="post">
   <h2>login form </h2>      

     <InputDetail label='Email' placeh='Email'/>
     <InputDetail label='Password' placeh='Password' type='password'/>
     <Button align="center" text='Login'/>
     <p align="center">
      Not Registered ? <a href="/register">Register Now</a>
     </p>
   </form>
 </>
  )
}
