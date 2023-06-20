import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';

export default function FoodUpdate() {
    const {id} = useParams();
    const [load,setLoad] = useState(false);

    const [user,setUser] =useState({
      user_id:null,
      typeoffood:'',
      quantity:'',
      beneficiaries:'',
      location:'',
      status:''
    });
     if(id){
        useEffect(()=>{
            setLoad(true);
            axiosClient.get(`/food/${id}`).then(({data})=>{
                setLoad(false);
                console.log(data);
                setUser(data)
          
                }).catch((err)=>{
                  setLoad(false)
                })
        },[])
        
    
      
    }
    const onSubmit = ()=>{
        axiosClient.put(`/food/${id}`).then(({data})=>{

        }).catch((err)=>{

        })
    }
  return (
    <>
        {user.id && <h2 align='center'> Food ID  {user.id}</h2>}
        {load &&  <h3 align='center'>Loading . . . </h3>}
        <form onSubmit={onSubmit}>
            <div className="form-control">
            input
            <button className='btn' align='center'> SAVE </button>
            </div>
        
        
        </form>
      
    </>

  )
}
