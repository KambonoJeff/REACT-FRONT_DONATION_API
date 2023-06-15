import React, { useRef } from 'react'
///////////////////////////////////////////////////
export default function UserForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const typeOfRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
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
  
  
  }
  return (
    <>
      <form align='center' action="" onSubmit={onSubmit} method="post">
      <h2 align="center">Add User</h2>
      <div className="form-control">
      <input ref={nameRef} placeholder='Enter Name' type="text" />
      <input ref={emailRef} placeholder='Enter email' type="email" />
      <input ref={typeOfRef} placeholder='Enter typeOf user' type="text" />
      <input ref={passwordRef} placeholder='Enter password' type="paasword" />
      <input ref={passwordConfirmationRef} placeholder='Enter passwordConfirmation' type="paasword" />
      </div>
      <button className='btn' type="submit">Add User</button>
      </form>
    </>
  )
}
