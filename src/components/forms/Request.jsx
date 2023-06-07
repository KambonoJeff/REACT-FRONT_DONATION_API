import React from 'react'
import {useRef} from 'react'
import axiosClient from '../../axios-client';

const Request=()=>{
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

export default Request
