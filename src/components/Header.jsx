import { useStateContext } from './contexts/ContextProvider';

import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header({ onLogout }) {
  const {
    user,
    admin,
    ngo,
  }=useStateContext();
  // let navigation = useNavigate();

    if(admin){
      console.log(true)
    }

  return (
    <header>
        
        <div>
            <ul className="flex box">
                <li > <h4> {[user , admin , ngo]}</h4></li>
                <li ><a href="#" onClick={onLogout} className="btn">Logout</a></li>
            </ul>
        </div>
      
    </header>
  )


}




