import { useStateContext } from './contexts/ContextProvider';
import { useState } from 'react';
import { useEffect } from 'react';

import React from 'react'

export default function Header({ onLogout }) {
  const {
    user,
    admin,
    ngo,
  }=useStateContext();

  const SelectOccupied=(  res )=>{
    let [d1,setD1] = useState();
    let [d2, setD2] = useState();
    let [ d3,setD3] = useState();

    const getData = useEffect(()=>{
      if(user){
        setD1(user);
        return d1;
      }
      if(admin){
        setD2(admin);
        return d2;
  
      }
      if(ngo){
        setD3(ngo);
        return d3 ;
  
      }
    },[])
    
    res = getData();

  }

  return (
    <header>
        
        <div>
            <ul className="flex box">
                <li > <h4> { SelectOccupied(res) } </h4></li>
                <li ><a href="#" onClick={onLogout} className="btn">Logout</a></li>
            </ul>
        </div>
      
    </header>
  )


}




