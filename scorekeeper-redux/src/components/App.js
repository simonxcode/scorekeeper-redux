import React, { Component } from 'react';
import Counter from './Counter';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import store from '../store/';
import Portal from './Portal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store} />  
        <PlayerOne store={store} />  
        <PlayerTwo store={store} /> 
        <Portal />
      </div>
    );
  }
}

export default App; 