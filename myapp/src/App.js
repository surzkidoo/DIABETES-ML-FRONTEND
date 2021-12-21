import React, { Component } from 'react';
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import ResultPage from "./result";


import {BrowserRouter as Router, Route} from "react-router-dom";


 
  
class App extends Component{
 

   render(){
      return(
         <Router>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/predict" exact component={HomePage} />
            <Route path="/result" exact component={ResultPage} />
         </Router>
      );
   }
}
export default App;