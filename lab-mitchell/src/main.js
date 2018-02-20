'use strict';

import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {say} from 'cowsay';
import Faker from 'faker';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'wecome to my cowsay, you... cowsay moo, you say too, boo?',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // IF YOU WRITE YOUR OWN METHODS, YOU GOTTA BIND TO COMPONENT
  handleClick() {
    this.setState(() => ({content: Faker.random.words(7)}));
  }

  // when you use the component, RENDER THIS as HTML
  render() {
    return (
      <div className="app">
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>click me punc;</button>
        <pre>{say({text: this.state.content})}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));