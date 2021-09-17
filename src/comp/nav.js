import React from 'react'
import {Link} from "react-router-dom"

export default function nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand text-white" href="#">
         <i className="fas fa-camera"></i>&nbsp;&nbsp;
         Screen Capture
       </a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div className="navbar-nav">
           <Link to="/home"><button className="nav-item btn">Home</button></Link>
           <Link to="/about"><button className="nav-item btn" >About Us </button></Link>
           <Link to="/blog"><button className="nav-item btn" >Blog</button></Link>
           <Link to="/contact"><button className="nav-item btn">Contact Us</button></Link>
         </div>
       </div>
      </nav>
    
        </div>
    )
}
