import { combineReducers, createStore } from 'redux'

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}


var reducer = combineReducers({ visibilityFilter, todos });
var store = createStore(reducer);
store.subscribe(function(){
  console.log('Dispatch!', store.getState());
});
store.dispatch({ type: 'ADD_TODO', text: 'foo'});
store.dispatch({ type: 'ADD_TODO', text: 'foo2'});
store.dispatch({ type: 'COMPLETE_TODO', index: 0});
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'active'});
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'completed'});
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'all'});