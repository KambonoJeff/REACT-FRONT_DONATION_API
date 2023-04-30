import React from 'react'
import InputDetail from '../components/InputDetail'
import Button from '../components/Button'
export default function Register() {
  const onSubmit=(event)=>{
    event.preventDefault()
  }
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
   
    <form onSubmit={onSubmit} method="post">
    <h2> Register Form</h2>

      <InputDetail label='Fullname' placeh='First Name'/>

      <InputDetail label='Email' placeh='Email' type='email'/>
      <InputDetail label='Password' placeh='Password' type='password'/>
      <InputDetail label='Confirm password' placeh='Confirm password' type='password'/>
      <Button align="center" text='Register'/>

      <p align="center">Already have an account? 
        <a href="/login">Login </a>
      </p>
    </form>    
  </> 

  )
}
