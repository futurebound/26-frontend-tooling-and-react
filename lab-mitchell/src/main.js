'use strict';

import './styles/main.scss';

// SLIGHTLY DIFFERENT between import/require
// require synchronous, import can be asynch
// const React = require('react'); 
import React from 'react';
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="main_header">
        <h1>Ths is my nav yo</h1>
      </header>
    );
  }
}

// start by creating app component
// name of component (APP), extends >>>
class App extends React.Component {
  // will be passed PROPS
  // create a component called APP, make it a reusable component, inherit from this base class/componenet, and anything that React.Component gives to me, I should have access to it (through props)
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // IF YOU WRITE YOUR OWN METHODS, YOU GOTTA BIND TO COMPONENT
  // can pass e/event into the listener if we need a property off the event in function
  handleClick() {
    // not just updating property of COUNT, will update the whole thing. always has to be passed back as an object
    this.setState(prevState => ({count: prevState.count + 1}));
  }

  // when you use the component, RENDER THIS as HTML
  render() {
    // need to RETURN a thing, but needs to be ONLY 1 ELEMENT AT A TIME. Can return nested things tho :]
    return (
      <div className="app">
        <Navbar />
        <h1>Hello World</h1>
        <p onClick={this.handleClick}>Counter: {this.state.count}</p>
        {console.log('hello yooo')}
        <p>Orem lorem lorem lorem reaodflkjiru lorem</p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));