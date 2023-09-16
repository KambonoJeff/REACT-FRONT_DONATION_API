import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../components/contexts/ContextProvider';
import axiosClient from '../axios-client';

export default function Admin() {

  let navigate = useNavigate();
  const nameRef = useRef();
  const emailRef=useRef();
  const passwordRef = useRef();
  const adminnumberRef = useRef();

  const {setToken, setType, setUser} = useStateContext();
  const  [error , setError] = useState();
  const  [load , setLoad] = useState();


    const onSubmit = (event)=>{
      event.preventDefault();
      const payload = {
        firstname: nameRef.current.value,
        email: emailRef.current.value,
        adminnumber:adminnumberRef.current.value,
        password:passwordRef.current.value,
      }
      console.log(payload)
      setLoad(true)
      axiosClient.post('/admin/login', payload).then(({data})=>{
        setLoad(false)
        setToken(data.token)
        setUser(data[0].firstname)
        setType(data.type)
      }).catch((err)=>{
        setLoad(false)
        console.log("error from back ::",err)
        setLoad( err)
      })

    }
  return (
    <>
       <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="brd-w">
      
   <form align="center" onSubmit={onSubmit} method="post">
   <h2>Admin Login Form </h2>
   {load && <h4 align='center'>Loading . . . </h4>}      
   
          <div className="form-control">
          <input ref={emailRef} type="email" placeholder='Enter your Email' />
          <input ref={nameRef} type="name" placeholder='Enter your first name' />
          <input ref={adminnumberRef} type="number" placeholder='Enter your Admin Number' />
          <input ref={passwordRef} type="password" placeholder='Enter your Password' />

          <button  className="btn" type="submit"> Login </button>
          <button className='btn' onClick={()=>{navigate(-1)}}> Back </button>
          <br />
          
          <br />
          
          </div>
          
          
          
   </form>
   
   </div>
    </>
  )
}
