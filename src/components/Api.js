import React, { Component } from 'react';
import axios from 'axios'

const api = axios.create({baseURL: `https://api.icndb.com/jokes/random`})



export default class Api extends Component {

    state = {
            joke: ''
        }

  constructor(props) {
    super(props)
    
      api.get('/').then(res => {
      this.setState({ joke: res.data.value.joke})
      })
      this.refreshPage = this.refreshPage.bind(this)
}    

refreshPage() {
    window.location.reload(false)
}


render(){
  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      <h3>{this.state.joke}</h3>
      <button onClick={this.refreshPage}>Next Joke</button>
    </div>
  );}
}
