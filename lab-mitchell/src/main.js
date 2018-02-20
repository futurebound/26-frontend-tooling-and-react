'use strict';

import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
// import {say, list} from 'cowsay-browser';
// const say = require('cowsay-browser').say()
import cowsay from 'cowsay-browser';
import faker from 'faker';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({text: 'welcome to the cowsay, you... cowsay moo you say too, boo?'}),
      cows: [],
      current: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  //beore the component gets mounted/put into the document, we will do this functionality
  componentWillMount() {
    cowsay.list((err, cows) => {
      let current = cows[0];
      this.setState({cows, current});
    });
  }

  // IF YOU WRITE YOUR OWN METHODS, YOU GOTTA BIND TO COMPONENT
  handleClick(e) {
    let current = e.target.value || this.state.current;
    let text = faker.random.words(7);
    this.setState({current, content: cowsay.say({text, f: current})});
  }

  // when you use the component, RENDER THIS as HTML
  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem</h1>
        <select onChange={this.handleClick}>
          {this.state.cows.map((cow, i) => {
            return <option value={cow} key={i}>{cow}</option>
          })}
        </select>
        <button onClick={this.handleClick}>click me punc;</button>
        <pre>
          <code>
            {this.state.content}
          </code>
        </pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));