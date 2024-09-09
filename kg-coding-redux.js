const redux = require('redux');

const INTIAL_VALUE ={
  counter : 0
}

const reducer = (store = INTIAL_VALUE, action) =>{
  let newStore = store;
  if(action.type === 'INCREMENT'){
    newStore = {counter : store.counter+1}
  }
  else if(action.type === 'DECREMENT'){
    newStore = {counter : store.counter-1}
  }
  else if(action.type === 'ADDITION'){
    newStore = {counter : store.counter + action.payload.number}
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
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'ADDITION', payload :{number : 7}})
