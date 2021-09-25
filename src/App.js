import './App.css';
import React, { Component } from 'react'
import Input from './Work/Input';
import Result from './Work/Result';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      arr:[],
      arr2:[]
    }
  }

  onChangeName = (value1, value2) => {
    this.setState({
      arr: [...this.state.arr,
        {firstvalue:value1, secondvalue:value2}
      ]
    })
  }
 
  deleteElement = (index) => {
    //new edit
    this.setState({
      arr2:this.state.arr.splice(index, 1)
    })
  }

  editElement = (index,e,k) => {
    // NEW EDI 3nd
    this.setState({
      arr2:this.state.arr.splice(index, 1,{firstvalue:e,secondvalue:k})
    })
  }
    
  render(){
    console.log(this.state.arr)
    return(
      <div>
        <Input changeLink = {this.onChangeName}/>
        <Result arr = {this.state.arr} deleteLink = {this.deleteElement} editLink = {this.editElement}/>
      </div>
    )
  }
}