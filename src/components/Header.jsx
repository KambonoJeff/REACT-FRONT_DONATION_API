import { useNavigate } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';

import React from 'react'

export default function Header({ onLogout }) {
  const {
    user,
    admin,
    ngo,
  }=useStateContext();
   let navigation = useNavigate();

    if(admin){
      console.log('somthing else')
    }

  return (
    <header>
        
        <div>
            <ul className="flex box">
                <li > <h4> {admin}</h4></li>
                <li ><a href="#" onClick={onLogout} className="btn">Logout</a></li>
            </ul>
        </div>
      
    </header>
  )


}




