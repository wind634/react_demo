import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './components/CommentBox'

//import {Navbar, ButtonToolbar, Button} from "react-bootstrap"

import { Button } from 'element-react';

import 'element-theme-default';

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

      //return (
      //    <Navbar>
      //        <Navbar.Header>
      //            <Navbar.Brand>
      //                <a href="#">react-bootstrap</a>
      //            </Navbar.Brand>
      //        </Navbar.Header>
      //
      //        <ButtonToolbar>
      //            <Button bsStyle="primary" bsSize="large">Large button</Button>
      //            <Button bsSize="large">Large button</Button>
      //        </ButtonToolbar>
      //
      //    </Navbar>
      //);

      return (
          <Button type="primary">Hello</Button>
      );
  }
}

export default App;
