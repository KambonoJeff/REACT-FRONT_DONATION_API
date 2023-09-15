import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../components/contexts/ContextProvider';
import axiosClient from '../axios-client';

export default function Admin() {

  let navigate = useNavigate();
  const firstnameRef = useRef();
  const secondnameRef = useRef();
  const emailRef=useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const adminnumberRef = useRef();

  const {setToken, setType} = useStateContext();
  const  [error , setError] = useState();
  const  [load , setLoad] = useState();


    const onSubmit = (event)=>{
      event.preventDefault();
      const payload = {
        firstname: firstnameRef.current.value,
        secondname: secondnameRef.current.value,
        email: emailRef.current.value,
        adminnumber:adminnumberRef.current.value,
        password:passwordRef.current.value,
        password_confirmation:confirmpasswordRef.current.value,
      }
      console.log('Payload before attack',payload)
      setLoad(true)
      axiosClient.post('/admin/register', payload).then(({data})=>{
        setLoad(false)
        console.log('this the logged data',data);
        setToken(data.token)
      }).catch((err)=>{
        setLoad(false)
        setError(err.response.data.message)
      })

    }
  return (
    <>
       <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="brd-w brd-t">
      
   <form align="center"  onSubmit={onSubmit} method="post">
   <h2>Admin registration Form </h2>
   <br />
   {load && <h4 align='center'>Loading . . . </h4>}      
   {error && <h4 align='center'>{error}</h4>}
          <div className="form-control">
          <input ref={firstnameRef} type="text" placeholder='Enter your first name' />
          <input ref={secondnameRef} type="text" placeholder='Enter your second name' />

          <input ref={emailRef} type="email" placeholder='Enter your Email' />
          <input ref={adminnumberRef} type="number" placeholder='Enter your Admin Number' />
          <input ref={passwordRef} type="password" placeholder='Enter your Password' />
          <input ref={confirmpasswordRef} type="password" placeholder='confirm your Password' />

          <button  className="btn" type="submit"> register </button>
          <button className='btn' onClick={()=>{navigate(-1)}}> Back </button>
          <br />
          
          <br />
          
          </div>
          
          
          
   </form>
   
   </div>
    </>
  )
}
