import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import PlayerOneComponent from './containers/PlayerOneComponent';
import PlayerTwoComponent from './containers/PlayerTwoComponent';
import GameScoreComponent from './containers/GameScoreComponent';
import Header from './components/Header';
import store from './store';
import './styles/styles.scss';

render(
  <Provider store={store}>
    <Header />
  <div className='container'>
    <div className='grid-container'>
      <div className='game-score'>
        <GameScoreComponent />
      </div>
      <div className='player-one'>
        <PlayerOneComponent />
      </div>
      <div className='player-two'>
        <PlayerTwoComponent />
      </div>
    </div>
  </div>
  </Provider>

,
  document.getElementById('root')
);

