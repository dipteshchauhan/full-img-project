import React from 'react';
import './services.css';
const Services=()=>{
    return(
        <div className='ser'>
                     <h1>Our Services</h1>
        <div className="baapdiv">
        <div className="card" style={{width : "20rem"}}>
            <img src="../tape_old.png" class="card-img-top"></img>
            <div class="card-body">
                <h5 class="card-title">Preimium</h5>
                <p className='para' class="card-text">Tune in with our Premium Plan—unlimited skips and high-quality streaming for just $9.99/month.</p>
                <a href="#" className="butoon btn btn-outline-light">Buy Now</a>
            </div>
        </div>

        <div className="card" style={{width : "20rem"}}>
            <img src="../harmonium.png" class="card-img-top"></img>
            <div class="card-body">
                <h5 class="card-title">Platinum</h5>
                <p className='para' class="card-text">Elevate your music experience with the Platinum Plan—ad-free listening, offline mode, and more at $19.99/month.</p>
                <a href="#" className="butoon btn btn-outline-light">Buy Now</a>
            </div>
        </div>

        <div className="card" style={{width : "20rem"}}>
            <img src="../caset.png" class="card-img-top"></img>
            <div class="card-body">
                <h5 class="card-title">Gold</h5>
                <p className='para' class="card-text">Strike the right chord with our Gold Plan—exclusive content, early releases, and top-notch sound for only $29.99/month.</p>
                <a href="#" className="butoon btn btn-outline-light">Buy Now</a>
            </div>
        </div>

        </div>

        </div>
    )
}
export default Services;