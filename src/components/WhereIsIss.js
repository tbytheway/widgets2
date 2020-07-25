import React, { Component } from 'react';

 
const API = 'https://coronavirus-19-api.herokuapp.com/';
const DEFAULT_QUERY = 'all';
 
class WhereIsIss extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
      isLoading: false,
    };
  }
 
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { hits, isLoading, error } = this.state;
 
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
        return <p>Loading ...</p>;
      }
 
    return (
      <ul>
       
      </ul>
    );
  }
  
}
 
export default WhereIsIss;