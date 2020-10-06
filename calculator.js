import React from "react";
import CalculatorTitle from "./calculatorTitle"
import OutputScreen from "./outputScreen"
import Button from "./button"



class Calculator extends React.Component{
    
  constructor() { 
    super(); 
    this.state = { 
      result: ''
    }  
    this.handleClick = this.handleClick.bind(this); 
  }
  
  render(){
        return (
            <div className = "frame"> 
            <CalculatorTitle value = "React Calculator"/> 
            <div class = "mainCalc"> 
            <OutputScreen result = "this.state.result"/>
            
          <div className="button-row"> 
          
            <Button label={'Clear'} handleClick = {this.handleClick}/> 
            <Button label={'Delete'} handleClick = {this.handleClick}/> 
            <Button label={'.'} handleClick = {this.handleClick}/> 
            <Button label={'/'} handleClick = {this.handleClick}/> 
          </div> 
          <div className="button-row"> 
            <Button label={'7'} handleClick = {this.handleClick}/> 
            <Button label={'8'} handleClick = {this.handleClick}/> 
            <Button label={'9'} handleClick = {this.handleClick}/> 
            <Button label={'*'} handleClick = {this.handleClick}/> 
          </div> 
          <div className="button-row"> 
            <Button label={'4'} handleClick = {this.handleClick}/> 
            <Button label={'5'} handleClick = {this.handleClick}/> 
            <Button label={'6'} handleClick = {this.handleClick}/> 
            <button label={'-'} handleClick = {this.handleClick}/> 
          </div> 
          <div className="button-row"> 
            <Button label={'1'} handleClick = {this.handleClick}/> 
            <Button label={'2'} handleClick = {this.handleClick}/> 
            <Button label={'3'} handleClick = {this.handleClick}/> 
            <Button label={'+'} handleClick = {this.handleClick}/> 
          </div> 
          <div className="button-row"> 
            <Button label={'0'} handleClick = {this.handleClick}/> 
            <Button label={'='} handleClick = {this.handleClick}/> 
          </div>
          </div>
          </div>
        )
  }


    handleClick(event){ 
 
      // get the value from the target element (button) 
      const value = event.target.value; 
     
      switch (value) { 
        case '=': { 
           if (this.state.question!=='') 
           { 
              var ans=''; 
                try
                  { 
                      ans = JSON.parse(this.state.question); 
                     
                  } 
                  catch(err) 
                  { 
                      this.setState({answer: "Math Error"}); 
                  } 
                  if (ans===undefined) 
                      this.setState({answer: "Math Error"});         
                  else
                      this.setState({ answer: ans , question: ''});
                      break; 
            } 
        } 
        case 'Clear': { 
          this.setState({ question: '', answer: '' }); 
          break;
        } 
     
        case 'Delete': { 
          var str = this.state.question; 
            str = str.substring(0,str.length-1); 
            this.setState({question: str}); 
            break;
        } 
     
        default: {
            this.setState({ question: value}) 
            break;
        } 
      } 
    } 
}

export default Calculator