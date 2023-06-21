import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';

export default function FoodUpdate() {
    const {id} = useParams();
    const [load,setLoad] = useState(false);
    let navigate = useNavigate();
    const [user,setUser] =useState({
      id:null,
      cereals:'',
      proteins:'',
      legumes:'',
      breakfast:'',
      snacks:'',
      cash:''
    });
    useEffect(()=>{
        console.log('useEffect');
        setLoad(true);
        if(id){
            axiosClient.get(`/food/${id}`).then(({data})=>{
                setLoad(false);
                console.log(data);
                setUser(data)
          
                }).catch((err)=>{
                  setLoad(false)
                })
        }
        
    },[])

    const onSubmit = ()=>{
        console.log(user)
        axiosClient.put(`/food/${id}`, user).then(({data})=>{
            console.log(data);
            return navigate('/users/food');

        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
    <br />
        {user.id && <h2 align='center'> Food ID  {user.id}</h2>}
        {load &&  <h3 align='center'>Loading . . . </h3>}
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <input placeholder='cereals' value={user.cereals} onChange={event => setUser({...user , cereals: event.target.value})} />
            <input placeholder='proteins' value={user.proteins} onChange={event => setUser({...user , proteins: event.target.value})} />
            <input placeholder='legumes' value={user.legumes} onChange={event => setUser({...user , legumes: event.target.value})} />
            <input placeholder='breakfast' value={user.breakfast} onChange={event => setUser({...user , breakfast: event.target.value})} />
            <input placeholder='snacks' value={user.snacks} onChange={event => setUser({...user , snacks: event.target.value})} />
            <input placeholder='cash' value={user.cash} onChange={event => setUser({...user , cash: event.target.value})} />
            <button className='btn' align='center'> SAVE </button>
            
            <button className='btn' onClick={()=>navigate(-1)}> Back </button>  
            </div>
        
        
        </form>
      
    </>

  )
}
