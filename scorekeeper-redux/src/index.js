import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import PlayerOneComponent from './containers/PlayerOneComponent';
import PlayerTwoComponent from './containers/PlayerTwoComponent';
import store from './store';

render(
  <Provider store={store}>
    <PlayerOneComponent />
    <PlayerTwoComponent />
  </Provider>,
  document.getElementById('root')
);

