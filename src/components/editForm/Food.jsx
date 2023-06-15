import React from 'react'
import {useRef} from 'react'
import axiosClient from '../../axios-client';

const Food_ = ()=>{
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
        typeoffood: foodRef.current.value,
        quantity: quantityRef.current.value,
        beneficiaries: beneficiariesRef.current.value,
        location: locationRef.current.value,
        status: statusRef.current.value,
      }
      console.log(payload)
    axiosClient.post('/debugtest',payload).then(({data})=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  }
    return (
      <>
      <h2> Hospitality Based institutions</h2>
     
        <form action="" onSubmit={onSubmit} method="post">
          <div className="form-control">
          <input ref={user_idRef} type="text" name="user_id" id="user_id" placeholder='Enter The User Id'/>
  
          </div>
  
          <div className="form-control">
          <input ref={foodRef} type="text" name="typeoffood" placeholder='Fruits, Legumes,cereals, proteins,vitamins' />
  
          </div>
  
          <div className="form-control">
          <input type="number" name="quantity" ref={quantityRef}placeholder='Quantity' />
  
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
export default Food_
