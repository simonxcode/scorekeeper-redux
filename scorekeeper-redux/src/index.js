import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import PlayerOne from './containers/CounterComponent';
import store from './store';

render(
  <Provider store={store}>
    <PlayerOne />
  </Provider>,
  document.getElementById('root')
);

