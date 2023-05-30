import React from 'react'
import InputDetail from './InputDetail'
import Button from './Button'
import {useRef, useState} from 'react'

const Form = ({  }) => {
  const Login=()=>{
    return(
      <>
         <br></br>
        <h2>login form </h2>      
        <form action="" method="post">
          <InputDetail label='Email' placeh='Email'/>
          <InputDetail label='Password' placeh='Password' type='password'/>
          <Button text='Login'/>
        </form>
      </>
   
    )        
  }
  const ngoLogin=()=>{
    return(
      <>
         <br></br>
        <h2>login form </h2>      
        <form action="" method="post">
          <InputDetail label='Email' placeh='Email'/>
          <InputDetail label='licenseNo' placeh='licenseNo' type='password'/>
          <Button text='Login'/>
        </form>
      </>
   
    )        
  }
  const register =()=>{
    return(
      
    <>
    <br></br>
      <h2> register form</h2>
   
    <form action="" method="post">

      <InputDetail label='fullname' placeh='First Name'/>

      <InputDetail label='Email' placeh='Email' type='email'/>
      <InputDetail label='Password' placeh='Password' type='password'/>
      <InputDetail label='Confirm password' placeh='Confirm password' type='password'/>
      <Button text='Register'/>
    </form>    
  </> 
    )
  }
  const ngoRequest=()=>{
    return(
      <>
      <br></br>
      <h2> Food Requesting Form</h2>
  
     
      <form action="" method="post">
      <InputDetail label='user_id' placeh='user_id'/>
          <InputDetail label='Type of Food' placeh='Fruits, Legumes,cereals, proteins,vitamins'/>
          <InputDetail label='Quantity' placeh='Quantity '/>
          <InputDetail label='beneficiaries ' placeh='beneficiaries '/>
          <InputDetail label='location ' placeh='location '/>
          <InputDetail label='status ' placeh='status '/>
        <Button text='Request'/>
      </form>

    </>

    )
  }
  const Hospitality = ()=>{
    const user_idRef = useRef();
    const foodRef = useRef();
    const quantityRef = useRef();
    const beneficiariesRef = useRef();
    const locationRef = useRef();
    const statusRef = useRef();

    const [errors, setErrors] = useState()
    const onSubmit=(event)=>{
      event.preventDefault()
      const payload = {
        user_id: user_idRef.current.value,
        food: foodRef.current.value,
        quantity: quantityRef.current.value,
        beneficiaries: beneficiariesRef.current.value,
        location: locationRef.current.value,
        status: statusRef.current.value,
      }
      console.log(payload)
      
    }
    return(
      <>
      <h2> Hospitality Based institutions</h2>
     
        <form action="" method="post">

          <InputDetail ref={user_idRef} label='user_id' placeh='user_id'/>
          <InputDetail ref={foodRef} label='Type of Food' placeh='Fruits, Legumes,cereals, proteins,vitamins'/>
          <InputDetail ref={quantityRef} label='Quantity' placeh='Quantity '/>
          <InputDetail ref={beneficiariesRef} label='beneficiaries ' placeh='beneficiaries '/>
          <InputDetail ref={locationRef} label='location ' placeh='location '/>
          <InputDetail ref={statusRef} label='status ' placeh='status '/>
          <button type="submit" className="btn"> POST</button>
        </form>

    </>
    )
    
  }
  const ngoRegister =()=>{
    return(
      <>
      <br></br>
      <h2>NGO- Register-Form</h2>
       
        <form action="" method="post">
          <InputDetail label='Organisation name' placeh='Organisation Name'/>
          <InputDetail label='Email' placeh='Email'/>
          <InputDetail label='Location' placeh='Location'/>
          <InputDetail label='Total Number of Beneficiaries' placeh='Number'/>
          <InputDetail label='Consumption Amount Per Week' placeh='Consumption Amount Per Week'/>
          <InputDetail label='Phonenumber' placeh='Phonenumber'/>
          <InputDetail label='licenseNo' placeh='licenseNo'/>
          <Button text='POST'/>

        </form>
    
    </>
    )
    
  }
  return (            
      <div>{Hospitality()}</div>  
  )
  
}

export default Form
