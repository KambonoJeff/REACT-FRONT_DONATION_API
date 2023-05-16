import React from 'react'

const Header = ({ user, onLogout }) => {


  return (
    <header>
        
        <div>
            <ul className="flex box">
                <li >{ user }</li>
                <li ><a href="#" onClick={onLogout} className="btn">Logout</a></li>
            </ul>
        </div>
      
    </header>
  )
}

export default Header
