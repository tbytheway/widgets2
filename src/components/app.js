import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import NameAge from './NameAge';
import SecretPhrase from './SecretPhrase'
import Add from './Add'
import MoveBox from './MoveBox';
import MouseTracker from './MouseTracker'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Widgets Homework</h1>
          <ul className="header">
          <li><NavLink to="/">Name Age</NavLink></li>
          <li><NavLink to="/secretphrase">Secret Phrase</NavLink></li>
          <li><NavLink to="/add">Add</NavLink></li>
          <li><NavLink to="/movebox">Move Box</NavLink></li>
          <li><NavLink to="/mousetracker">Mouse Tracker</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={NameAge}/>
            <Route exact path="/secretphrase" component={SecretPhrase}/>
            <Route exact path="/add" component={Add}/>
            <Route exact path="/movebox" component={MoveBox}/>
            <Route exact path="/mousetracker" component={MouseTracker}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}
