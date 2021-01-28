import React, { Component } from 'react'

export default class OneResult extends Component {
 
  deleteItem = () => {
    this.props.deleteLinkSecond(this.props.indexValue)
  }

  editItem = () => {
    this.props.editLinkSecond(this.props.a,  this.props.valueOne, this.props.b)
  }
  
  render() {
    return (
      <div>
        {this.props.valueOne}    {this.props.valueTwo} {this.props.indexValue}     
        <button onClick = {() => this.deleteItem()}> DELETE </button>
        <button onClick = {() => this.editItem()}> EDIT </button>
      </div>
    )
  }
}




