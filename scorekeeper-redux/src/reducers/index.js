import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';

// const rootReducer = (state, action) => {
//   if (action.type === 'RESET') {
//     state = undefined;
//   }
//   return appReducer(state, action);
// }

// const appReducer = combineReducers({
//   CounterReducer
// });

export default combineReducers({
  counter: CounterReducer,
});



