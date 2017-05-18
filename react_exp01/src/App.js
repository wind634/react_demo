import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './components/CommentBox'

import {Navbar, Button} from "react-bootstrap"

class App extends Component {
  render() {
    //return (
      //  <div className="App">
      //    <div className="App-header">
      //      <img src={logo} className="App-logo" alt="logo" />
      //      <h2>Welcome to React</h2>
      //    </div>
      //    <p className="App-intro">
      //      To get started, edit <code>src/App.js</code> and save to reload.
      //    </p>
      //  </div>
      //);

      //return (
      //    <div className="App">
      //        <CommentBox />
      //    </div>
      //);

      return (
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#">react-bootstrap</a>
                  </Navbar.Brand>
              </Navbar.Header>
              <Button >按钮</Button>
          </Navbar>
      );

  }
}

export default App;
