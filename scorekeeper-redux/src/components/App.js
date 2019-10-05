import React, { Component } from 'react';
import Counter from './Counter';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import store from '../store/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store} />  
        <PlayerOne store={store} />   
        <PlayerTwo store={store} /> 
      </div>
    );
  }
}

export default App; 