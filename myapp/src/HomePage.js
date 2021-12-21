import React, { Component } from 'react';
import Header from './header'
import Question from './question'



 
  
class HomePage extends Component{
   constructor(props){
      super(props);
      
      
      this.state={
         data:
            [
             {
                question:"Pregnancies"
             },
             {
               question:"Glucose"
            },
            {
               question:"Blood Pressure"
            },
            {
               question:"Skin Thickness"
            },
            {
               question:"Insulin"
            },
            {
               question:"BMI"
            },
            {
               question:"Diabetes Predegree Function"
            },
            {
               question:"Age"
            }
            

            ],
           
               model:"Logistic-regression",
            
  
         
      }


    
   }
   selectaModel=(selected)=>{
      alert(selected);
      this.setState({model:selected})
  }
   render(){
      return(
         <div>
            
            <Header  model={this.state.model} selected={this.selectaModel}/>
            <per />
            <Question   model={this.state.model}  clicke={this.clicke} data={this.state.data} />
          
         </div>
      );
   }
}
export default HomePage;