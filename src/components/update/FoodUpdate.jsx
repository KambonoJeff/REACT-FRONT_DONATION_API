import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';

const FoodUpdate = ()=> {
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
        setLoad(true);
        
            axiosClient.get(`/food/${id}`).then(({data})=>{
                setLoad(false);
                console.log(data);
          
                }).catch((err)=>{
                  setLoad(false)
                  console.log('request not successful')
                })
        
        
    },[])

    const onSubmit = (event)=>{
      event.preventDefault();
      setLoad(true);
      axiosClient.post(`/food/update/${id}`,user)
      .then(({res})=>{
        setLoad(false);
        console.log(res);
        window.confirm('The record has been Successfully updated!')
      })
      .catch((err)=>{
        setLoad(false);
        console.log('An error occured when making the request!! ::', err);
        
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
            <button className='btn' onClick={()=>navigate(-1)}>Back</button>
            </div>
        
        
        </form>
      
    </>

  )
}

export default FoodUpdate