import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';

const CompareCards = () => {
    const [food,setfood]=useState([]);
    const [cash,setcash]=useState([]);
    const [load, setLoad] = useState();
     
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
      <div className="grid box">
        <div className="grid box">
            <h2>Details</h2>
            <div className="flex box">
            <div className="card-container">
            <h3>Donations</h3>
        </div>
        <div className="card-container">
            <h3>Requests</h3>
        </div>
        </div>
        </div>
        <div className="flex box">TOTAL</div>
      </div>
    </>
  )
}

export default CompareCards
