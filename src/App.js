import React,{Component} from "react";
import './component/Style.css';
import Functionclick from './component/Functionclk.js'
import Classclick from './component/Classclk.js'



class App extends Component  { 
  constructor(){
    super();
    this.state={
      classClick:false,
      funcClick:false
    }
  }
  render(){
    return (
      <div>
      <h1 style={{textShadow:'3px 3px 3px cyan',textAlign:"center"}}>Styling using Functional and Class Component</h1>
      <button id='btn1' onClick={()=>this.setState({funcClick:!this.state.funcClick })}>To See Styling in Function Compnonent</button>
      <button id='btn2' onClick={()=>this.setState({classClick:!this.state.classClick })}>To See Styling in Class Compnonent</button>
       {this.state.funcClick ? <Functionclick /> :null}
       {this.state.classClick ?  <Classclick/>:null}
      
    </div>
    )
  }
}
  export default App