
import './App.css';
import Midspace from './midspace';
import Footer from './footer';
//import Header from './header';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './header';
import Home from './component/home';
import About from './component/about';
import Services from './component/services';
import Info from './component/info';
import Signin from './component/signin';
import Register from './component/register';
function App() {
  return (
    <div>
     <div className="background-container">
   
   
   {/* <Midspace></Midspace> */}
       <Router>
       <Header></Header> 
     
        <Routes>
           <Route path='/' element={<Home />}/> 
          <Route path='/about' element={<About />}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer></Footer> 
    

       
    </Router>
     </div>
   <div className="background-container2">

   </div>

     </div>
   
  );
}

export default App;
