import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';

const FoodCard = () => {
    const [food,setfood]=useState([]);
    const [cash,setcash]=useState([]);
    const [load, setLoad] = useState();
  const[riri , setRiri]=useState([]);
  const [asset, setAsset]=useState([]);
  const payload = 
 
  {
      cereals:asset[0],
      proteins:asset[1],
      legumes:asset[2],
      breakfast:asset[3],
      snacks:asset[4],
  }

    
 
     useEffect(()=>{
      setLoad(true);

      axiosClient.get('/food')
      .then((res)=>{
          setLoad(false);
          setAsset(res.data);
        })
      .catch(err =>{ setLoad(false); console.error(err)});
      setLoad(true)
      axiosClient.get('/sumfood').then((res)=>{
        setLoad(false)
        setfood(res.data[0]);
        setcash(res.data[1])
      })
      .catch(err =>{ setLoad(false); console.error(err)});
        setLoad(true)
        axiosClient.post('/requests/diffrence',payload)
        .then(({data})=>{
            setLoad(false)
            setRiri(data[1])
        })
        .catch((err)=>{
            setLoad(false)
            console.log('An error occured when get the diffrence', err.response)
        });
     
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
    <div align='right' class="card3 ">
        <div class="amount negative">Kgs {riri}</div> 
        <div class="title"> Requests </div>
    </div>
    </div>
    </>
  )
}

export default FoodCard
