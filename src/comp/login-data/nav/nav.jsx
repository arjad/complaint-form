import React from 'react'
import Logo from "../img/Logo.png"
import "../nav/nav.css";

export default function nav() 
{
    return (
        <div className="nav_bar container-fluid">
            <img src={Logo}/>            
        </div>
    )
}
