import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import axiosClient from '../../axios-client';
const RequestCards = () => {
    const [requests , setRequests] =useState([]);
  const [ngo , setNgo] = useState([]);

    let navigate = useNavigate();
    const [load,setLoad]=useState();

    const _requests =()=>{
        setLoad(true)
        axiosClient.get('/PostRequest').then((res)=>{
            setLoad(false)
        setRequests(res.data.data)})
        .catch((err)=>{
            setLoad(false)
            console.log('error occured while making the request',err)
        });
       }
       useEffect(()=>{
        _requests()
       },[])
       const _ngo =()=>{
        setLoad(true)
        axiosClient.get('/ngo/show').then((res)=>{
            setLoad(false)
        setNgo(res.data[0].data)
        })
        .catch((err)=>{
            setLoad(false)
            console.log('An error occured while performing the request',err)
        });
       }
       useEffect(()=>{
        _ngo()
       },[])
  return (
    <>
    <br />
    <br />
    <br />
    <h3 align='center'> The various request that are made by our registered NGOS aroung the country are shown below from the earliest and most crucial.</h3>
       {load && <h4 align='center'>Loading . . . </h4>}
       <div className="card-container">

       {requests.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      </div>

    <button  className='btn' onClick={()=>{navigate(-1)}}> Back </button>
    </>
  )
}

export default RequestCards
