import React, { Component } from 'react';
import axios from 'axios'

const api = axios.create({baseURL: `https://api.wheretheiss.at/v1/satellites/25544`})

export default class Iss extends Component {
  constructor(props) {
    super(props)
    this.state = {
         positions: []
        }


       
}    
componentDidMount() {
api.get('/').then(res => {
        // console.log(res.data)
      this.setState({ positions: res.data})
      })
}

render(){
  return (
    <div className="App">
      <h1>Where is the ISS</h1>
      <h3>{this.state.positions.map((position) => {
      return <li>{position.altitude}</li>})}</h3>
     </div>
  );}
}
