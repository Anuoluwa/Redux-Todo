import uuid from 'uuid';
import * as types from './actionTypes';

export function deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      payload: id,
    };
  }
  
  export function addTodo(task) {
    return {
      type: types.ADD_TODO,
      payload: {
        id: uuid(),
        task,
        completed: false,
      },
    };
  }