import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosClient from '../../axios-client';

export default function FoodUpdate() {
    const {id} = useParams();
    const [load,setLoad] = useState();

    const [user,setUser] =useState({
      user_id:null,
      typeoffood:'',
      quantity:'',
      beneficiaries:'',
      location:'',
      status:''
    });
     if(id){

        axiosClient.get(`/food/${id}`).then(({data})=>{
          setLoad(false);
          setUser(data)
    
          }).catch((err)=>{
            setLoad(false)
          })
    
      
    }

  return (
    <>
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <select placeholder='Food Type'  value={user.typeoffood} onChange={event => setUser({...user, typeoffood: event.target.value})}>
                <option  value="Cereals">Cereals</option>
                <option value="snacks">snacks</option>
                <option value="legumes">legumes</option>
                <option value="proteins">proteins</option>
                <option value="breakfast">breakfast</option>
                <option value="cash">cash</option>
              </select>
            <input value={user.quantity} onChange={event=> setUser({...user, quantity: event.target.value})} />
            <input value={user.beneficiaries} onChange={event=> setUser({...user, beneficiaries: event.target.value})} />
            <input value={user.location} onChange={event=> setUser({...user, location: event.target.value})} />
            <input value={user.status} onChange={event=> setUser({...user, status: event.target.value})} />
            
            <button className='btn' align='center'> SAVE </button>
            </div>
        
        
        </form>
      
    </>

  )
}
