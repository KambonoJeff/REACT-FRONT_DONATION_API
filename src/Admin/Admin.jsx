import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../components/contexts/ContextProvider';

export default function Admin() {

  let navigate = useNavigate();
  const emailRef=useRef();
  const passwordRef = useRef();
  const {setAdmin, setToken} = useStateContext();


    const onSubmit = (event)=>{
      event.preventDefault();

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
   
          <div className="form-control">
          <input ref={emailRef} type="email" placeholder='Enter your Email' />
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
