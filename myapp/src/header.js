import React, { Component } from 'react';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
           model:"Logistic-regression",
           code:123
        }
    }
  
    render() { 
        return ( 
       
          <div className="header">
        
        <span>
            <li onClick={()=>{this.props.selected("Random-forest")}} className={this.props.model==='Random-forest'?'active menu':'menu'}>Random forest</li>
            <li onClick={()=>{this.props.selected("Decision-tree")}} className={this.props.model==='Decision-tree'?'active menu':'menu'}>Decision tree</li>
            <li onClick={()=>{this.props.selected("Logistic-regression")}} className={this.props.model==='Logistic-regression'?'active menu':'menu'}>Logistic regression</li>
        </span>
        
        </div>
      
         );
    }
}
 
export default Header;