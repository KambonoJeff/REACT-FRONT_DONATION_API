import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../components/contexts/ContextProvider';
import axiosClient from '../axios-client';

export default function NgoLogin() {
  let navigate = useNavigate();
  const [errors, setErrors] = useState()

  const {setUser,setType,type,setToken} = useStateContext();
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
      console.log(data[0])
      if(data.message == 'Credential unmatched!'){
        setErrors(data.message)
      }
      setUser(data[0]);
      setType(data.type);
      setToken(data.token);


    }).catch(({err})=>{
      if(err == 422){

      console.log('THIS AN UNPROCESSABLE CONTENT',err)

      }
      setErrors(err)
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
   <br />
   <div className="alert">
             {errors && <h5 align='center'>{errors}</h5>}
            </div>
          <div className="form-control">
          <input ref={nameRef} type="text" placeholder='Enter your name' />
          <input ref={passwordRef} type="number" placeholder='Enter your License Number' />

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
