import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class WelcomePage extends Component {
   
  
    render() { 
        return ( 
          <div className="free"> 
          
            <div className="overlay">

</div>
            <div className="container1 bk">
                 
                <div className="container-home">
                    
                    <h1 className="header2">Diabetes Prediction System</h1>
                    <div className=" info">
                     Find out your diabetes status with just some few clicks and questions now.
                    </div>
                    <p className="slogan">Fast, Accurate & Reliable</p>
                <Link className="startbutton" to="/predict" >
                GET STARTED
                 </Link>
                
             
                </div>
                <div className="side2">
                doll
                <img className='pic' alt="show" src="logo192.png" />
                </div>
                 
            </div>
            
            </div>
        );
    }
}
 
export default WelcomePage;