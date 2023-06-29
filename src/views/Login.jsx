import React, { useRef, useState } from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../components/contexts/ContextProvider'
import { Link } from 'react-router-dom';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState()
  const {setUser, setToken} = useStateContext()

  const onSubmit=(event)=>{
    event.preventDefault()
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,

    }
    console.log(payload)
    axiosClient.post("/login",payload).then(
      ({data})=>{

        setUser(data.user);
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
            <h2 align="center">{errors}</h2>
          <input ref={emailRef} type="email" placeholder='Enter your Email' />
          <input ref={passwordRef} type="password" placeholder='Enter your Password' />

          <button  className="btn" type="submit"> Login </button>
          <br />
          <h3 align="center">
            Not Registered ? <a href="/register">Register Now</a>
          </h3>
          </div>
          <br />
          <div>

          <Link className='btn' to='/admin/register'> Admin </Link>
          <Link className='btn' to='/ngo/register'> Ngo </Link>
          </div>
   </form>
   
   </div>
 </>
  )
}
