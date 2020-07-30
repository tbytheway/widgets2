import React, {Component} from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import NameAge from './NameAge';
import SecretPhrase from './SecretPhrase';
import Add from './Add';
import MoveBox from './MoveBox';
import MouseTracker from './MouseTracker';
import TodoList from './ToDo';
import Api from './Api';
import Iss from './WhereIsIss'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Widgets Homework</h1>
          <ul className="header">
          <li><NavLink to="/">Name Age</NavLink></li>
          <li><NavLink to="/secretphrase">Secret Phrase</NavLink></li>
          <li><NavLink to="/add">Add</NavLink></li>
          <li><NavLink to="/movebox">Move Box</NavLink></li>
          <li><NavLink to="/mousetracker">Mouse Tracker</NavLink></li>
          <li><NavLink to="/todolist">Todo List</NavLink></li>
          <li><NavLink to="/api">API</NavLink></li>
          <li><NavLink to="/iss">ISS</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={NameAge}/>
            <Route path="/secretphrase" component={SecretPhrase}/>
            <Route path="/add" component={Add}/>
            <Route path="/movebox" component={MoveBox}/>
            <Route path="/mousetracker" component={MouseTracker}/>
            <Route path="/todolist" component={TodoList}/>
            <Route path="/api" component={Api}/>
            <Route path="/iss" component={Iss}/>
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
