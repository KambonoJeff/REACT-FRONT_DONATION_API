import React from 'react'
import {useRef} from 'react'
import axiosClient from '../../axios-client';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

const Request=()=>{
    const cerealsRef = useRef();
    const proteinsRef = useRef();
    const legumesRef = useRef();
    const breakFastRef = useRef();
    const snacksRef = useRef();
    const cashRef = 0;
    let navigate = useNavigate();

    
    const onSubmit=(event)=>{
      event.preventDefault()
      if(!window.confirm('THANK YOU FOR DONATING TO A JUST COURSE')){
        return
      }else{
        
      const payload = {
        cereals: cerealsRef.current.value,
        proteins: proteinsRef.current.value,
        legumes: legumesRef.current.value,
        breakfast: breakFastRef.current.value,
        snacks: snacksRef.current.value,
        cash: cashRef,
      }
       axiosClient.post('/food',payload).then(({data})=>{
         console.log(data)
       }).catch
       (err=>{
         const response = err.response;
         if(response && response.status === (422 || 500 || 404) ){
           console.log(response.data.errors)
  
         };
       })

      }

      
      
    }

    return(
      <>
      <br />
      <br />
      <div className="brd">
      <h2 align='center'> Food Donation Form</h2>
      <br />   
      <h4 align='center'>Enter the units of food you donating in kilograms</h4>   
      <form action="" onSubmit={onSubmit}  method="post">
       <div className="form-control">
         <input type="number" name="Cereals" id="Cereals" ref={cerealsRef} placeholder='Cereals' />
       </div>
       <div className="form-control">
         <input type="number" name="Proteins" id="Proteins" ref={proteinsRef} placeholder='Proteins' />

       </div>
       <div className="form-control">
         <input type="number" name="Legumes" id="Legumes" ref={legumesRef} placeholder='Legumes' />

       </div>
       <div className="form-control">
         <input type="number" name="BreakFast" id="BreakFast" ref={breakFastRef} placeholder='BreakFast' />

       </div>
       <div className="form-control">
         <input type="number" name="Snacks" id="Snacks" ref={snacksRef} placeholder='Snacks' />

       </div>
      
       <button type="submit"  className="btn"> SUBMIT</button>
       <button className='btn' onClick={()=>navigate(-1)}>Back</button>
      </form>
      <br />

      </div>
    </>

    )
  }

export default Request
