import React, { useRef, useState } from 'react'
import axiosClient from '../../axios-client';
import {   useNavigate, withRouter } from 'react-router-dom';
///////////////////////////////////////////////////
export default function UserForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const typeOfRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  let navigate = useNavigate();
  const [errors, setErrors] = useState();
  const [load,setLoad]=useState()
  const onSubmit =(event)=>{
    event.preventDefault()
  
  
    const payload={
      name:nameRef.current.value,
      email:emailRef.current.value,
      type: typeOfRef.current.value,
      password:passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    setLoad(true)
    axiosClient.post('/register', payload).then(({res})=>{
      setLoad(false)
      window.confirm('New User Added succesfully!')
    }).catch
    (err=>{
      setLoad(false)
      console.log('this the error',err)
    })
  }
  return (
    <>
    <br />
    <br />
    <div className="brd">
      <br />
      <form align='center' action="" onSubmit={onSubmit} method="post">
      <h2 align="center">Add User</h2>
      <br />
      {load && <h4 align='center'>Loading . . . </h4>}
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
                <option value="Voluntary">Voluntary</option>
               
              </select>
      <input ref={passwordRef} placeholder='Enter password' type="password"  />
      <input ref={passwordConfirmationRef} placeholder='Enter passwordConfirmation' type="password"  />
      </div>
      <button className='btn' type="submit">Add User</button>
   
      <button className='btn' onClick={()=>navigate(-1)}>Back</button>

      
      </form>
      </div>
    </>
  )
}
