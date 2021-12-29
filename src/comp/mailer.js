import React from 'react';
import emailjs from "emailjs-com";

function mailer(props) 
{
    let sendemail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_7d84wng', 'template_vi508zh',e.target,"user_BpzazZBzDkHCOivRTRuwI").then(res=>{
            console.log(res)
        }).catch(e=> console.log(e));
    }
    return (
        <form  onSubmit={sendemail}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>

        <textarea name="msg" rows="4"/>
        <input type="submit" value="send"/>

            
        </form>
    );
}

export default mailer;