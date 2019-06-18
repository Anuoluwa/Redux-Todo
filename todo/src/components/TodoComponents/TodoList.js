import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';


export class TodoList extends Component {
    render() {
        const todos = this.props.todos || [];
        return (
            <div>
                {
                    todos.map(todo => (
                        <Todo 
                            key={todo.id}
                            todo={todo}
                        />
                    ))
                }
            </div>
        )
    }
}





function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}
export default connect(
    mapStateToProps 
)(TodoList);






// function TodoList (props) {
//           return (
//               <div>
//                   {
//                       props.todo.map((todoObj) => {
//                           return  (
//                               <Todo key={todoObj.id} todo={todoObj} markComplete={props.markComplete}/>
//                               )
//                       })
//                   }
//               </div>
//           )
// }

// export default TodoList;