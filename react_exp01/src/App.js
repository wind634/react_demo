import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './components/CommentBox'

//import {Navbar, ButtonToolbar, Button} from "react-bootstrap"

import { Button } from 'element-react';

import 'element-theme-default';
import { connect } from 'react-redux';
import {onButtonClick, onChangeText}  from './actions/testAction';
import { bindActionCreators } from 'redux';


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

      //return (
      //    <Button type="primary">Hello</Button>
      //);

      //return (
      //    <CounterContainer />
      //);

      const {text, onChangeText, onButtonClick} = this.props;
      return (
          <div>
              <h1 onClick={onChangeText}> {text} </h1>
              <button onClick={onButtonClick}>click me</button>
          </div>
      );
  }
}

//映射Redux state到组件的属性
function mapStateToProps(state) {
    return { text: state.testReducer.text }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onButtonClick:onButtonClick,
        onChangeText:onChangeText,
    }, dispatch);
}

//export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App)