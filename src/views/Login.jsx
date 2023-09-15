import React, { useRef, useState } from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../components/contexts/ContextProvider'
import { Link } from 'react-router-dom';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState()
  const {setUser,setType, setToken} = useStateContext()

  const onSubmit=(event)=>{
    event.preventDefault()
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,

    }
    console.log(payload)
    axiosClient.post("/login",payload).then(
      ({data})=>{
        if(data.message == 'Credentials do not match'){
          setErrors(data.message)
        }
        console.log(data[0])
        setType(data.type)
        
        setUser(data[0]);
        setToken(data.token);
        
      }
    ).catch(err=>{
      const res = err.response;
      if(res && res.status === (401||403||404)){
        setErrors(res);

      }
    })

  }
  return (
    < >
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="brd-w">
      
   <form align="center" onSubmit={onSubmit} method="post">
   <h2>Login Form </h2>    
   <br />  
   {
            <div className="alert">
             {errors && <h5 align='center'>{errors}</h5>}
            </div>
            
          }
          <div className="form-control">
          <input ref={emailRef} type="email" placeholder='Enter your Email' />
          <input ref={passwordRef} type="password" placeholder='Enter your Password' />

          <button  className="btn" type="submit"> Login </button>
          <br />
          <h4 align="center">
            Not Registered ? <a href="/register">Register Now</a>
          </h4>
          <br />
          <h4 align="center">
            Are you an NGO ? <a href="/ngo/login"> login here </a>
          </h4>
          </div>
          <br />
          <div>
          </div>
   </form>
   
   </div>
 </>
  )
}
