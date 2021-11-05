import React from 'react'
import "./login.css";
import glass from "../img/glass-bg.png";
import Avatar from "../img/user.png";

export default function login() 
{
    return (
        <div className="form-img animate__animated animate__bounceInRight">
        <div className="bg-glass">
            <img className="glass" src={glass}/>
            <img className="avatar" src={Avatar}/>
             <div className="input-div">
                <lable> Username : </lable><br/>
                <input type="text" placeholder="Username"/>
            </div>
            <div className="input-div">
                <lable>Password : </lable><br/>
                <input type="text" placeholder="Password"/>
            </div>
            <p className="rem">
                <input type="checkbox"/>Remember Me
            </p>
            <div className=" pushable">
            </div>
        </div>
        </div>       
    )
}
