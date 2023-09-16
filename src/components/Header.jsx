import { Link } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';

import React from 'react'

export default function Header({ onLogout }) {
  const {
   user,
   type,
   
  }=useStateContext();

  
  return (
    <header>
        
        <div>
            <ul className="flex sm-box ">
              <div className='flex'>
                 <h4> {type}</h4>&nbsp;&nbsp;&nbsp;
                 <h4> {user}</h4>
                 </div>
                <div className="flex" align='right'>
                {
                  type==='admin' &&    <Link className='link' to={'/admin/register'}> Register new admin</Link>
                }
                <Link className='link' to="/Dashboard">Dashboard</Link>
              
   
                <li onClick={onLogout} className="link">Logout</li>
                </div>
            </ul>
        </div>
      
    </header>
  )


}




