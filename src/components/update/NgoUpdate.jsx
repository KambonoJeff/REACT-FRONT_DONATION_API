import React, {  useEffect, useState } from 'react'
import {  Navigate, useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

const NgoUpdate = ()=> {
    const {id} = useParams();
    let navigate = useNavigate();
    const{type}=useStateContext();

    const [ngo , setNgo] = useState(
        {
            id:null,
            name:'',
            email:'',
            location:'',
            licenseNo:'',
            phonenumber:'',
            beneficiaries:'',
    
        }
    );
    const [load ,setLoad]= useState(false);
    useEffect(()=>{
      if(type!=='admin'){
        window.alert('ONLY ADMIN CAN EDIT DATA!')
        return <Navigate to='users/ngo' />
      }else{
        setLoad(true)
                axiosClient.get(`/showngo/${id}`).then(({data})=>{
                    setLoad(false)
                    console.log(data[0])
                    setNgo(data[0])

                }).catch((err)=>{
                  console.log('something is wrong the request for an individual id is not successful', err)
                })
      }
        
    },[])
                


   
    const onSubmit=(event)=>{
        event.preventDefault()
        setLoad(true)
        axiosClient.post(`/ngo/update/${id}`,ngo)
        .then(({data})=>{
          setLoad(false)
          console.log('This the response data', data)
          window.confirm('The record has been succesfully updated!')
        })
        .catch((err)=>{
          setLoad(false);
          console.log('An error occured when making the request!!', err.response.data.message)
        })

      }
  return (
    <>
      <br />
        {ngo.id && <h2 align='center'> Ngo Name:  {ngo.name}</h2>}
        {load &&  <h3 align='center'>  Loading . . . </h3>}
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <input placeholder='name' value={ngo.name} onChange={event => setNgo({...ngo , name: event.target.value})} />
            <input placeholder='email' value={ngo.email} onChange={event => setNgo({...ngo , email: event.target.value})} />
            <input placeholder='location' value={ngo.location} onChange={event => setNgo({...ngo , location: event.target.value})} />
            <input placeholder='beneficiaries' value={ngo.beneficiaries} onChange={event => setNgo({...ngo , beneficiaries: event.target.value})} />
            <input placeholder='phonenumber' value={ngo.phonenumber} onChange={event => setNgo({...ngo , phonenumber: event.target.value})} />
            <input placeholder='licenseNo' value={ngo.licenseNo} onChange={event => setNgo({...ngo , licenseNo: event.target.value})} />
            <button type='submit' className='btn' align='center'> SAVE </button>
            <button className='btn' onClick={()=>navigate(-1)}>Back</button>
            </div>
        
        
        </form>


    </>
  )
}

export default NgoUpdate