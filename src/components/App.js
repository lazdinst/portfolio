import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import { Button } from 'semantic-ui-react';
import ContentHeader from './ContentHeader.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <ContentHeader />
      </div>
    );
  }
}

export default App;