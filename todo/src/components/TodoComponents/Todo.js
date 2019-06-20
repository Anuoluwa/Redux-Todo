import React, { Component } from 'react';
import {deleteTodo} from '../../state/actionDispatchers';
import { connect } from 'react-redux';
import styled from 'styled-components';


const StyledQuote = styled.div`
  width: 50%;
  font-size: 1.8rem;
  margin: 3px auto;
  padding: 1px 8px 2.5px 100px;
  background-color: ${pr => (pr.highlight ? '#fffbc4' : '#f4f4f4')};
  border: ${pr => (pr.redBorder ? '2px solid red' : 'initial')};
  

  p {
    font-weight: bolder;
    display: inline-block;
  }

  button{
      padding: 1.5px 1rem;
      margin: 0 0 0 1rem;
  }

`;

export class Todo extends Component {
    todoStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const {task, id} = this.props.todo;
        return (
            <StyledQuote>
                <p> 
                { task } 
                </p>
                <button onClick={() => this.props.deleteTodo(id)}>Delete</button>
            </StyledQuote>
        )
    }
}

export default connect(null, { deleteTodo })(Todo);
