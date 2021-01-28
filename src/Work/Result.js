import React, { Component } from 'react'
import OneResult from './OneResult';

export default class Result extends Component {

  render() {
    console.log("aasdad",this.props.arr)
    return (
      <div> 
        { this.props.arr?( this.props.arr.map((result, index) => {
          return(
            <OneResult key= {index} 
              valueOne = {result.firstvalue}
              valueTwo = {result.secondvalue}
              indexValue = {index}
              deleteLinkSecond = {this.props.deleteLink}
              editLinkSecond = {this.props.editLink}
            />
          )
        })
         
      ):<div> </div>} 
      </div>
    )
  }
}
