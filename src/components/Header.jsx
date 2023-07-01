import React from 'react'
import axiosClient from '../axios-client';
import { useEffect,useState } from 'react';
import { useStateContext } from './contexts/ContextProvider';


const Header = ({  onLogout }) => {
  const {
    user,
    admin,
    ngo,
  }=useStateContext();

  return (
    <header>
        
        <div>
            <ul className="flex box">
                <li > <h4> {?
                    user = null: () 
                  } </h4></li>
                <li ><a href="#" onClick={onLogout} className="btn">Logout</a></li>
            </ul>
        </div>
      
    </header>
  )
}

export default Header
