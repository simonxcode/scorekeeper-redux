import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import PlayerOneComponent from './containers/PlayerOneComponent';
import PlayerTwoComponent from './containers/PlayerTwoComponent';
import GameScoreComponent from './containers/GameScoreComponent';
import store from './store';
import './styles/styles.scss';

render(
  <Provider store={store}>
    <GameScoreComponent />
    <PlayerOneComponent />
    <PlayerTwoComponent />
  </Provider>,
  document.getElementById('root')
);

