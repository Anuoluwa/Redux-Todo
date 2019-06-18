import * as types from './actionTypes';
import dummyTodos from '../constants/dummyTodos';


export function todosReducer(state=dummyTodos, action) {
    switch (action.type) {
      case (types.DELETE_TODO): 
        return state.filter(todo => todo.id !== action.payload);
  
      case(types.ADD_TODO):
        return [...state, action.payload];
      
        default:
          return state;
    }
  }