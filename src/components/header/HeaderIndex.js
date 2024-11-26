import React, { useState } from 'react'
import { LOGO_URL, Profile } from '../../utils/headerConstants'
export default function HeaderIndex() {
  const [loginButton,setLoginButton] = useState("login") 
  const handleLoginChange =()=>{
    if(loginButton === "login"){
    setLoginButton("logout")
    }
    if(loginButton === "logout"){
      setLoginButton("login")
    }
  }
  return (
    <div className='headerDiv'>
      <img className='logo' src={LOGO_URL}/>
      <ui className="headerList">
        <li className='name' key={1}>About Us</li>
        <li className='name' key={2}>Sign in</li>
        <li className='name' key={3}>Cart</li>
        <li className='name' key={4} onClick={()=>{handleLoginChange()}}>{loginButton}</li>
        <li><img src={Profile} className='userImg' /></li>
      </ui>
    </div>
  )
}

