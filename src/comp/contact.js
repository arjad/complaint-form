import React from 'react'
import Nav from "./nav"
import Foot from "./Foot"
import EmailJS from "emailjs-com"
export default function contact() 
{
    const sendemail =(e) =>{
        e.preventDefault();

        EmailJS.sendForm('service_7d84wng','template_vi508zh',e.target,'user_BpzazZBzDkHCOivRTRuwI')
        .then(res=>{ console.log(res);})
        .catch(e=>{console.log(e);});

    }
    return (
    <div className="contact">
        <Nav />
        <form className="py-5 px-5 container border">
            <lable for="name">Your Name</lable>
            <input id="name" className="form-control" type="text" name="name"/>
            <lable for="email">Your Email</lable>
            <input id="email" className="form-control" type="email" name="email"/>
            <lable for="msg">Messege</lable>
            <textarea id="msg" className="form-control" type="text" name="msg"></textarea>
            <input onSubmit={sendemail} className="form-control mt-3 bg-primary text-white" type="submit" value="Send"/>
            
        </form>
        <Foot />
    </div>
    )
}
