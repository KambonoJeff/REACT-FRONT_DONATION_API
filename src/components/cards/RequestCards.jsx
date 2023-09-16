import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card';
const RequestCards = () => {
    const [requests , setRequests] =useState([]);
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
  return (
    <>
    <br />
    <br />
    <br />
    <br />
       {load && <h4 align='center'>Loading . . . </h4>}
    <Card data={requests}/>
    </>
  )
}

export default RequestCards
