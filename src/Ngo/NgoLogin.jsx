import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../components/contexts/ContextProvider';
import axiosClient from '../axios-client';

export default function NgoLogin() {
  let navigate = useNavigate();
  const {setNgo,setToken} = useStateContext();
  const nameRef = useRef();
  const passwordRef = useRef();

  const onSubmit=(event)=>{
    event.preventDefault()
    const payload = {
      name:nameRef.current.value,
      licenseNo: passwordRef.current.value,
    }
    console.log(payload);
    axiosClient.post('/ngo/login',payload).then(({data})=>{
      setNgo(data.name);
      setToken(data.token);
    }).catch((err)=>{
      console.log(err)
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
   <h2>Ngo Login Form </h2>      
   
          <div className="form-control">
          <input ref={nameRef} type="text" placeholder='Enter your name' />
          <input ref={passwordRef} type="password" placeholder='Enter your License Number' />

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
