import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';

import React from 'react'

export default function Header({ onLogout }) {
  const {
    user,
    admin,
    ngo,
  }=useStateContext();

  
  return (
    <header>
        
        <div>
            <ul className="flex sm-box ">
                <li > <h4> {admin}</h4></li>
                <div className="flex" align='right'>
             
                <Link className='link' to="/Dashboard">Dashboard</Link>
              
   
                <li onClick={onLogout} className="link">Logout</li>
                </div>
            </ul>
        </div>
      
    </header>
  )


}




