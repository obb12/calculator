import React from 'react';
import logo from './logo.svg';
import './App.css';
import {evaluate} from 'mathjs'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display:'',
      operation:'',
    }
  }
  add(event){
    console.log(event.target)
    var operation = this.state.operation

    operation += event.target.value
    this.setState({operation:operation})
  }
  calculate(event){
var total =   evaluate(this.state.operation)
    this.setState({operation:total})
}
clear(){
  this.setState({operation:''})

}



  render(){
  return (
    <div className="calculator card">

<input type="text" className="calculator-screen z-depth-1" value={this.state.operation} disabled />

<div className="calculator-keys">

  <button type="button"  id="add" onClick={this.add.bind(this)} className="operator btn btn-info" value="+">+</button>
  <button type="button"   id="subtract" onClick={this.add.bind(this)} className="operator btn btn-info" value="-">-</button>
  <button type="button"  id="multiply" onClick={this.add.bind(this)} className="operator btn btn-info" value="*">&times;</button>
  <button type="button"  id="divide" onClick={this.add.bind(this)} className="operator btn btn-info" value="/">&divide;</button>

  <button type="button"  id="seven"value="7" onClick={this.add.bind(this)} className="btn btn-light waves-effect">7</button>
  <button type="button" id="eight" value="8" onClick={this.add.bind(this)} className="btn btn-light waves-effect">8</button>
  <button type="button" id="nine" value="9" onClick={this.add.bind(this)} className="btn btn-light waves-effect">9</button>


  <button type="button" id="four" value="4" className="btn btn-light waves-effect">4</button>
  <button type="button" id="five" value="5" onClick={this.add.bind(this)} className="btn btn-light waves-effect">5</button>
  <button type="button" id="six" value="6" onClick={this.add.bind(this)} className="btn btn-light waves-effect">6</button>


  <button type="button" id="one" value="1" onClick={this.add.bind(this)} className="btn btn-light waves-effect">1</button>
  <button type="button" id="two" value="2" onClick={this.add.bind(this)} className="btn btn-light waves-effect">2</button>
  <button type="button" id="three" value="3" onClick={this.add.bind(this)} className="btn btn-light waves-effect">3</button>


  <button type="button" id="zero" value="0" onClick={this.add.bind(this)} className="btn btn-light waves-effect">0</button>
  <button type="button" id="decimal" onClick={this.add.bind(this)} className="decimal function btn btn-secondary" value=".">.</button>
  <button type="button" id="clear"  onClick={this.clear.bind(this)} className="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>
  <button type="button" id="equals"  onClick={this.calculate.bind(this)} className="equal-sign operator btn btn-default" value="=">=</button>
</div>

</div>
  );
}
}

export default App;
