import React, { Component } from 'react';
import Counter from './Counter';
import PlayerOne from './PlayerOne';
import store from '../store/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store} />  
        <PlayerOne store={store} />  
      </div>
    );
  }
}

export default App; 