import React from 'react';

function TodoForm (props){
        return (
            <div>
                <input
                    onChange={props.clickVal}
                    type="text"
                    value={props.value}
                    // keydown={
                    //     (event)=> {
                    //     if (event.keyCode === 13) {
                    //         props.createTodo();
                    //      }
                    //     }
                    // }

            />
            <button onClick={() => props.createTodo()}>Add Todo</button>
            <button onClick={() => props.removeTodo()}>Clear completed</button>
            </div>
        )
}
 


export default TodoForm;