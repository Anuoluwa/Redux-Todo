import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/TodoComponents/Container';
import { todosReducer } from './state/reducers';



const combinedReducer = combineReducers({
  todos: todosReducer
});

// STEP 5: CREATE THE REDUX STORE
const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#root'),
);


// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   constructor(props) {
//     super(props);
//     this.state = {
//         todosList: initialTodosList,
//         todoTitle: '',
//     }
// };

// changerHandler = (event) => {
//   this.setState({ todoTitle: event.target.value});
// }

// addTodo = () => {
//   const newTodo = {
//       task: this.state.todoTitle,
//       id: Date.now(), 
//       completed: false,
//   };

//   const newTodosList = this.state.todosList.concat(newTodo);

//   this.setState({
//       todosList: newTodosList,
//       todoTitle: ''
//   })
// }

// markComplete = (id) => {
//   this.setState({ todosList: this.state.todosList.map(todo => {
//     if(todo.id === id) {
//       todo.completed = !todo.completed
//     }
//     return todo;
//   })})
// }

// removeTodo = (i) => {
//   this.setState(currentState => ({
//     todosList: currentState.todosList.filter(todo => todo.completed === false)
//   }));
// }
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//         <TodoList 
//           todo={this.state.todosList}
//           markComplete={this.markComplete}
//           removeTodo={this.removeTodo}
//         />
//         <TodoForm 
//           value={this.state.todoTitle} 
//           createTodo={this.addTodo} 
//           clickVal={this.changerHandler} 
//           todo={this.todosList} 
//           removeTodo={this.removeTodo}
//         />
//       </div>
//     );
//   }
// }

// export default App;
