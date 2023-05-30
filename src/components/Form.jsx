import React from 'react'
import InputDetail from './InputDetail'
import Button from './Button'
import {useRef, useState} from 'react'

const Form = () => {
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
  try{Hospitality();}
  catch(e){
    console.error(e)
  }
  
    return(
      <>
      <h2> Hospitality Based institutions</h2>
     
        <form action="" onSubmit={Hospitality} method="post">
          <input ref={user_idRef} type="text" name="user_id" id="user_id" placeholder='Enter The User Id'/>
          <input ref={foodRef} type="text" name="FoodType" placeholder='Fruits, Legumes,cereals, proteins,vitamins' />
          <input type="number" name="number" ref={quantityRef}placeholder='Quantity' />
          <input type="text" name="beneficiaries" id="beneficiaries" placeholder='beneficiaries' ref={beneficiariesRef} />
          <input type="text" name="location" id="location" placeholder='location' ref={locationRef} />
          <input type="text" name="status" id="status" ref={statusRef} />


          
          <button type="submit" onClick={Hospitality()} className="btn"> POST</button>
        </form>

    </>
    )
    
  }
  return (            
      <div>{Hospitality()}</div>  
  )
  
  
}

export default Form



// const Login=()=>{
//   return(
//     <>
//        <br></br>
//       <h2>login form </h2>      
//       <form action="" method="post">
//         <InputDetail label='Email' placeh='Email'/>
//         <InputDetail label='Password' placeh='Password' type='password'/>
//         <Button text='Login'/>
//       </form>
//     </>
 
//   )        
// }
// const ngoLogin=()=>{
//   return(
//     <>
//        <br></br>
//       <h2>login form </h2>      
//       <form action="" method="post">
//         <InputDetail label='Email' placeh='Email'/>
//         <InputDetail label='licenseNo' placeh='licenseNo' type='password'/>
//         <Button text='Login'/>
//       </form>
//     </>
 
//   )        
// }
// const register =()=>{
//   return(
    
//   <>
//   <br></br>
//     <h2> register form</h2>
 
//   <form action="" method="post">

//     <InputDetail label='fullname' placeh='First Name'/>

//     <InputDetail label='Email' placeh='Email' type='email'/>
//     <InputDetail label='Password' placeh='Password' type='password'/>
//     <InputDetail label='Confirm password' placeh='Confirm password' type='password'/>
//     <Button text='Register'/>
//   </form>    
// </> 
//   )
// }
// const ngoRequest=()=>{
//   return(
//     <>
//     <br></br>
//     <h2> Food Requesting Form</h2>

   
//     <form action="" method="post">
//     <InputDetail label='user_id' placeh='user_id'/>
//         <InputDetail label='Type of Food' placeh='Fruits, Legumes,cereals, proteins,vitamins'/>
//         <InputDetail label='Quantity' placeh='Quantity '/>
//         <InputDetail label='beneficiaries ' placeh='beneficiaries '/>
//         <InputDetail label='location ' placeh='location '/>
//         <InputDetail label='status ' placeh='status '/>
//       <Button text='Request'/>
//     </form>

//   </>

//   )
// }

// const ngoRegister =()=>{
//   return(
//     <>
//     <br></br>
//     <h2>NGO- Register-Form</h2>
     
//       <form action="" method="post">
//         <InputDetail label='Organisation name' placeh='Organisation Name'/>
//         <InputDetail label='Email' placeh='Email'/>
//         <InputDetail label='Location' placeh='Location'/>
//         <InputDetail label='Total Number of Beneficiaries' placeh='Number'/>
//         <InputDetail label='Consumption Amount Per Week' placeh='Consumption Amount Per Week'/>
//         <InputDetail label='Phonenumber' placeh='Phonenumber'/>
//         <InputDetail label='licenseNo' placeh='licenseNo'/>
//         <Button text='POST'/>

//       </form>
  
//   </>
//   )
  
// }
