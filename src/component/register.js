import React from 'react';
import './register.css';
const Register=()=>{
    return(
      
           
            <div class="cardpregister">
       <div class="card" id="card-register">
        <div id="input-div">
            <h1>Register</h1>
            <input type="text" placeholder='Enter Email or Mobile Number'></input><br></br>
            <br></br>
            <input type="number" placeholder='Mobile Number'></input>
            <br></br>  <br></br>
            <button>Get OTP</button>
            <br></br>  <br></br>
            <input type="number" placeholder='Enter OTP'></input>
            <br></br>  <br></br>
            <button>Register</button>
            
        </div>

       </div>
    </div>
    
        
    )
}
export default Register;