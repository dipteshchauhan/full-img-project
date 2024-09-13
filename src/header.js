import React from 'react';
import './header.css';
import { BrowserRouter as Router,NavLink } from 'react-router-dom';

const Header=()=>{
    return(

  
            <div id="nav">
            
                       <div id="navv">
                        
                        <ul className='buttonln'>
                             <li >
                              <button>
                                <NavLink id='navlink' to="/">
                                 Home
                                 </ NavLink>
                                 </button >
                                 </li>
                              <li> <button><NavLink id='navlink' to="/services">Services</NavLink></button></li> 
                             <li> <button><NavLink id='navlink' to="/about">AboutUs</NavLink></button></li>
                              <li> <button><NavLink id='navlink' to="/info">ContactUs</NavLink></button></li> 
                              <li><button ><NavLink id='signin' to="/signin">Sign In</NavLink></button></li>
                         </ul>
                         
                         
                       </div>
                       
                     </div>
        
    )
}
export default Header;