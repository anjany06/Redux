const redux = require('redux');

const INTIAL_VALUE ={
  counter : 0
}

const reducer = (store = INTIAL_VALUE, action) =>{
  let newStore = store;
  if(action.type === 'INCREMENT'){
    newStore = {counter : store.counter+1}
  }
  return newStore;
}
const store = redux.createStore(reducer);

const subscriber = () =>{
  const state = store.getState();
  console.log(state);
}
store.subscribe(subscriber);

store.dispatch({type: 'INCREMENT'});
