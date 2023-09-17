import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';

const FoodCard = () => {
    const [food,setfood]=useState([]);
    const [cash,setcash]=useState([]);
    const [load, setLoad] = useState()
 
 
     useEffect(()=>{
      setLoad(true)
      axiosClient.get('/sumfood').then((res)=>{
        setLoad(false)
        console.log('this the return data',res)
        setfood(res.data[0]);
        setcash(res.data[1])
      })
        .catch(err =>{ setLoad(false); console.error(err)});
     
     },[])

  return (
    <>
    <div align='right' className="box fixed">
          <div align='right' class="card3 ">
         <div class="amount">${cash}</div> 
        <div class="title"> Cash </div>
    </div>
    
    <div align='right' class="card3 ">
        <div class="amount">Kgs {food}</div> 
        <div class="title"> Food </div>
    </div>
    </div>
    </>
  )
}

export default FoodCard
