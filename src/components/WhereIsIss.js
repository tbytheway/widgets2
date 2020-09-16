import React, { Component } from 'react';
import axios from 'axios'

const api = axios.create({baseURL: `https://api.wheretheiss.at/v1/satellites/25544`})


export default class Iss extends Component {
  constructor(props) {
    super(props)
    this.state = {
         positions: {}
        }
this.updatePosition = this.updatePosition.bind(this)
       
}    
componentDidMount() {
api.get('/').then(res => {
        // console.log(res.data)
      this.setState({ positions: res.data})
      })
  }

updatePosition = () => {
  this.positions = setInterval(
    this.setState({
      altitude: this.state.positions.altitude,
      velocity: this.state.positions.velocity,
      long: this.state.positions.longitude,
      lat: this.state.positions.latitude
    }), 1000
  )
}


render(){
  return (
    <div>
      <h1>Where is the ISS</h1>
      <h3>{this.state.positions.altitude}</h3>
      <h3>{this.state.positions.velocity}</h3>
      <h3>{this.state.positions.longitude}</h3>
      <h3>{this.state.positions.latitude}</h3>
      
     </div>
  );}
}
