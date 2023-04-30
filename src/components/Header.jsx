import React from 'react'

const Header = ({ userinfo, onLogout }) => {


  return (
    <header>
        
        <div>
            <ul className="flex box">
                <li >{ userinfo }</li>
                <li ><a href="#" onClick={onLogout} className="btn">Logout</a></li>
            </ul>
        </div>
      
    </header>
  )
}

export default Header
