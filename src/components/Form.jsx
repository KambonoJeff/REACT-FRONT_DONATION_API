import React from 'react'
import {useRef} from 'react'

const Form = () => { 
  return(
    _ngoRequest()
  ) 
}
export default Form
//######################################################
const _requests = ()=>{
  const user_idRef = useRef();
  const foodRef = useRef();
  const quantityRef = useRef();
  const beneficiariesRef = useRef();
  const locationRef = useRef();
  const statusRef = useRef();

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
  return (
    <>
    <h2> Hospitality Based institutions</h2>
   
      <form action="" onSubmit={onSubmit} method="post">
        <div className="form-control">
        <input ref={user_idRef} type="text" name="user_id" id="user_id" placeholder='Enter The User Id'/>

        </div>

        <div className="form-control">
        <input ref={foodRef} type="text" name="FoodType" placeholder='Fruits, Legumes,cereals, proteins,vitamins' />

        </div>

        <div className="form-control">
        <input type="number" name="number" ref={quantityRef}placeholder='Quantity' />

        </div>

        <div className="form-control">
        <input type="text" name="beneficiaries" id="beneficiaries" placeholder='beneficiaries' ref={beneficiariesRef} />

        </div>

        <div className="form-control">
        <input type="text" name="location" id="location" placeholder='location' ref={locationRef} />

        </div>

        <div className="form-control">
        <input type="text" name="status" id="status" ref={statusRef} placeholder='Status' />

        </div>    
        <button type="submit"  className="btn"> POST</button>

      </form>

  </>
  )
}
  const _ngoRequest=()=>{
    const cerealsRef = useRef();
    const proteinsRef = useRef();
    const legumesRef = useRef();
    const breakFastRef = useRef();
    const snacksRef = useRef();
    const cashRef = useRef();
    
    const onSubmit=(event)=>{
      event.preventDefault()
      const payload = {
        cereals: cerealsRef.current.value,
        proteins: proteinsRef.current.value,
        legumes: legumesRef.current.value,
        breakfast: breakFastRef.current.value,
        snacks: snacksRef.current.value,
        cash: cashRef.current.value,
      }
      console.log(payload);

      
      
    }

    return(
      <>
      <h2> Food Requesting Form</h2>   
      <form action="" onSubmit={onSubmit}  method="post">
       <div className="form-control">
         <input type="text" name="Cereals" id="Cereals" ref={cerealsRef} placeholder='Cereals' />
       </div>
       <div className="form-control">
         <input type="text" name="Proteins" id="Proteins" ref={proteinsRef} placeholder='Proteins' />

       </div>
       <div className="form-control">
         <input type="text" name="Legumes" id="Legumes" ref={legumesRef} placeholder='Legumes' />

       </div>
       <div className="form-control">
         <input type="text" name="BreakFast" id="BreakFast" ref={breakFastRef} placeholder='BreakFast' />

       </div>
       <div className="form-control">
         <input type="text" name="Snacks" id="Snacks" ref={snacksRef} placeholder='Snacks' />

       </div>
       <div className="form-control">
         <input type="text" name="Cash" id="Cash" ref={cashRef} placeholder='USD|EUR|GBP' />

       </div>
       <button type="submit"  className="btn"> SUBMIT</button>

      </form>

    </>

    )
  }

//const ngoRegister =()=>{
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
