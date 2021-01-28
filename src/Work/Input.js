import React, { Component } from 'react'
import Result from './Result';

export default class Input extends Component {
  constructor() {
    super()
    this.state = {
      first: "",
      second: ""
    };
  }
  
  onChangeName(){
    this.props.changeLink(this.state.first, this.state.second);

  }

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(name, value)
  };
  render() {
    return (
      <div>
        <input type = "text" value = {this.state.first} onChange = {this.onHandleChange} name = "first" />
        <br />
        <input type = "text" value = {this.state.second} onChange = {this.onHandleChange} name = "second" />
        <br />
        <button onClick= {() => this.onChangeName()}> ADD </button> 
        <Result a = {this.state.name} b = {this.state.value} />
      </div>
    )
  }
}
