import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../state/actionDispatchers';
import styled from 'styled-components';


const StyledForm = styled.div`
margin: 3px auto;
width: 50%;
font-size: 1.5rem;

div {
    display: inline;
    margin: 0 auto;
    padding: 2rem 0;
    margin: 10px 0 0 0;
}
input {
    height: 3rem;
    width: 50%;
    font-size: 1rem;
}
`;

const Button = styled.button`
    margin: 0 0 0 1rem;
    padding: 1rem 3rem;
    font-size: 1rem;
`;

export class TodoForm extends Component {
    taskRef = React.createRef();

    onAddTodo = () => {
        this.props.addTodo(
          this.taskRef.current.value,
        );
        // 2- implement so it uses this.props.addQuote
        // and also clears the inputs
        this.taskRef.current.value = '';
      }
    render() {
        return (
            <StyledForm>
                <div>
                    
                    <input ref={this.taskRef} type="text"  placeholder="enter your todo..."/>
                </div>
                <Button onClick={this.onAddTodo}>
                    Add Todo
                </Button>
            </StyledForm>
        )
    }
}



export default connect(null, { addTodo })(TodoForm);



// function TodoForm (props){
//         return (
//             <div>
//                 <input
//                     onChange={props.clickVal}
//                     type="text"
//                     value={props.value}
//                     // keydown={
//                     //     (event)=> {
//                     //     if (event.keyCode === 13) {
//                     //         props.createTodo();
//                     //      }
//                     //     }
//                     // }

//             />
//             <button onClick={() => props.createTodo()}>Add Todo</button>
//             <button onClick={() => props.removeTodo()}>Clear completed</button>
//             </div>
//         )
// }
 