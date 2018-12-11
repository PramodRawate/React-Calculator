import React, { Component } from 'react';
import classes from'./App.css';
import Frame from './components/frame';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Frame></Frame>
      </div>
    );
  }
}

export default App;
