import React from 'react';
import './signin.css';
import { NavLink } from 'react-router-dom';
const Signin=()=>{

    return(
    <div class="cardp">
       <div class="card" id="card-signin">
        <div id="input-div">
            <h1>Sign In</h1>
            <input type="text" placeholder='Enter Email or Mobile Number'></input><br></br>
            <br></br>
            <input type="password" placeholder='Password'></input>
            <br></br>  <br></br>
            <button>Sign In</button>
            <br></br>
            <br></br>
            <h5>OR</h5>
            <br></br>
            
            <NavLink to="/register"><button>Register</button></NavLink>
            <br></br> <br></br>
            <a href='#'><h6>Forgot Password?</h6></a>
        </div>

       </div>
    </div>
    
    )
}
export default Signin;