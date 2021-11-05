import React from 'react';
import "./body.css";
import Logo from "../img/Logo.png";
import Text from "../Text/text.jsx";
import "animate.css/animate.min.css";
import Login from "../login/login.jsx";
import Slider from "../slider/slider.jsx";
// import Pacakges from "../packagess"
export default function body() 
{
    return (
    <div className="body">
        
      <img src={Logo} className="logo-i animate__animated animate__flipInX"/>
      <Login />
      <Slider />
      <Text />
            


    </div>
    )
}
