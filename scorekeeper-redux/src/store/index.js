import { createStore } from 'redux';

const initialState = {
  count: 5
};

//reducer function for updating object 
const reducer = (state = initialState, action) => {
  console.log('reducer running', action);

  switch(action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {count: state.count + 1 });
    default: 
      return state;
  }
}
//redux state container
const store = createStore(reducer);

export default store;