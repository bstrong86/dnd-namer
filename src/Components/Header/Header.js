import React from 'react'
import Logo from '../../images/logo.png'
import './Header.css'


export default function Header(props){
  

  return (
    <div className="Header">
      <img className="LogoImage" src={Logo}/>
      <h2 className="Title">Create a Character</h2>
    </div>
  )
}