import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import { useNavigate } from 'react-router-dom';

const CompareCards = () => {
    const [food,setfood]=useState([]);
    const [cash,setcash]=useState([]);
    const [load, setLoad] = useState();
    const [sum,setSum]=useState([])
    let navigate = useNavigate();
    const food_ =()=>{
      axiosClient.get('/food').then((res)=>{
        setLoad(false)
        console.log(res.data);
        setSum(res.data)
        console.log('This the sum',sum[0])
  
      })
        .catch(err =>{ setLoad(false); console.error(err)});
     }
     useEffect(()=>{
      setLoad(true)
      food_()
     },[])
   
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
    <br />
    <br />
    <br />
    <br />
      <div align='center' className="grid box">
        <div className="grid box">
            <div className="flex box">
            <div className="card-container">
                <h3>Donations</h3>
                <div className="grid">
                <div class="card3 ">
            <div class="amount">Kgs {sum[0]}</div> 
            <div class="title"> Cereals </div>
        </div>

        <div class="card3 ">
            <div class="amount">Kgs {sum[1]}</div> 
            <div class="title"> Proteins </div>
        </div>
        <div class="card3 ">
            <div class="amount">Kgs {sum[2]}</div> 
            <div class="title"> Legumes </div>
        </div>
        <div class="card3 ">
            <div class="amount">Kgs {sum[3]}</div> 
            <div class="title"> Breakfast </div>
        </div>
        <div class="card3 ">
            <div class="amount">Kgs {sum[4]}</div> 
            <div class="title"> Snacks </div>
        </div>
        <div class="card3 ">
            <div class="amount">${sum[5]}</div> 
            <div class="title"> Cash </div>
        </div> 
                </div>
            </div>
        <div className="card-container">
            <h3>Requests</h3>
            <div className="grid">
                <div class="card3 ">
            <div class="amount negative">Kgs {sum[0]}</div> 
            <div class="title"> Cereals </div>
        </div>

        <div class="card3 ">
            <div class="amount negative">Kgs {sum[1]}</div> 
            <div class="title"> Proteins </div>
        </div>
        <div class="card3 ">
            <div class="amount negative">Kgs {sum[2]}</div> 
            <div class="title"> Legumes </div>
        </div>
        <div class="card3 ">
            <div class="amount negative">Kgs {sum[3]}</div> 
            <div class="title"> Breakfast </div>
        </div>
        <div class="card3 ">
            <div class="amount negative">Kgs {sum[4]}</div> 
            <div class="title"> Snacks </div>
        </div>
        <div class="card3 ">
            <div class="amount negative">${sum[5]}</div> 
            <div class="title"> Cash </div>
        </div> 
                </div>
        </div>
        </div>
        </div>
        <div className="flex box">TOTAL</div>
      </div>
    </>
  )
}

export default CompareCards
