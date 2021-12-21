import React, { Component } from 'react';
import css from './login.css';


class Login extends Component {
   
  
    render() { 
        return (  
            <div className="container-fluid ">
     <div className="d-flex container-11 justify-content-center   align-items-center">
        <div className="col-12 col-sm-8  shadow col-md-5 col-lg-4  container2  p-4 rounded-lg">
            <h3 className="head">Login</h3>
            <hr className="div"/>
            <div className="inputbox  rounded-lg mb-3 col-12 mx-auto">
                <small>P</small>
                <input type="text" className="" placeholder="Username"/>
            </div>
            <div className="inputbox mb-3 rounded-lg  col-12 mx-auto">
                <small>P</small>
                <input type="password" className="" placeholder="Password"/>
            </div>
            <div className="checbox ">
                <input type="checkbox"/>
                <span className="rmtext">Remember me</span>
            </div>
            <span className="cacc">Create an account </span>
            <input className="submit rounded-lg" type="submit" value="Login" />
        </div>
    </div>   
    </div>
        );
    }
}
 
export default Login;