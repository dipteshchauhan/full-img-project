import React from 'react';
import './info.css';
const Info=()=>{
return(
    <div className='contactus'>
       <h5>Give Us Your Feedback</h5>
       <div className='form'>
      <div class="mb-3">
       <label class="form-label">Email Address</label><br></br>
       <input class="input-text-email"type="email" placeholder='name@gmail.com'></input><br></br>
       </div>
       <div class="mb-3 " >
       <label class="form-label">Text Area</label><br></br>
       <input class="input-text-feedback" type="text" placeholder='write here'></input><br></br>
       </div> 
       <button className="butoon btn btn-outline-light">Submit</button>
       </div>
        
    </div>
)
}
export default Info;