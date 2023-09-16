import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';

const FoodCard = () => {
    const [sum,setSum]=useState([])
    const [load, setLoad] = useState()
    const food =()=>{
      axiosClient.get('/food').then((res)=>{
        setLoad(false)
        setSum(res.data)
  
      })
        .catch(err =>{ setLoad(false); console.error(err)});
     }
     useEffect(()=>{
      setLoad(true)
      food()
     },[])
     const cash = sum[5]
     const cereals = sum[0]
     const proteins = sum[1]
     const legumes = sum[2]
     const breakfast = sum[3]
     const snacks = sum[4]
  return (
    <>
    <div align='right' className="box fixed">
          <div align='right' class="card3">
         <div class="amount">${cash}</div> 
        <div class="title">Total Cash</div>
    </div>

    <div align='right' class="card3">
        <div class="amount">${cereals}</div> 
        <div class="title">Cereals</div>
    </div>

    <div align='right' class="card3">
        <div class="amount">${proteins}</div> 
        <div class="title">Proteins</div>
    </div>
    <div align='right' class="card3">
        <div class="amount">${legumes}</div> 
        <div class="title">legumes</div>
    </div>
    <div align='right' class="card3">
        <div class="amount">${breakfast}</div> 
        <div class="title">breakfast</div>
    </div>
    <div align='right' class="card3">
        <div class="amount">${snacks}</div> 
        <div class="title">snacks</div>
    </div>
    </div>
    </>
  )
}

export default FoodCard
