import React, { useRef, useState } from 'react'
import axiosClient from '../../axios-client';
import {  Link, Navigate } from 'react-router-dom';
///////////////////////////////////////////////////
export default function UserForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const typeOfRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState()

  const onSubmit =(event)=>{
    event.preventDefault()
  
  
    const payload={
      name:nameRef.current.value,
      email:emailRef.current.value,
      type: typeOfRef.current.value,
      password:passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    console.log(payload);
    axiosClient.post('/register', payload).then((res)=>{
      return <Navigate to={"/users/user"}/>

    }).catch
    (err=>{
      const response = err.response;
      if(response && response.status === (422 || 500 || 404) ){
        console.log(response.data)
        setErrors(response.data.errors)

      };
    })
  }
  return (
    <>
    <br />
    <br />
    <div className="brd">
      <form align='center' action="" onSubmit={onSubmit} method="post">
      <h2 align="center">Add User</h2>
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
      <input ref={nameRef} placeholder='Enter Name' type="text"  />
      <input ref={emailRef} placeholder='Enter email' type="email" />
      <select className='form-control' ref={typeOfRef} name="type" id="type">
                <option  value="Hospitality">Hospitality</option>
                <option value="NGO">NGO</option>
                <option value="Admin">Admin</option>
                <option value="Voluntary">Voluntary</option>
               
              </select>
      <input ref={passwordRef} placeholder='Enter password' type="password"  />
      <input ref={passwordConfirmationRef} placeholder='Enter passwordConfirmation' type="password"  />
      </div>
      <button className='btn' type="submit">Add User</button>
      <Link className='btn' to="/users/user">Back</Link>

      
      </form>
      </div>
    </>
  )
}
