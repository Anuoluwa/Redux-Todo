import React, { Component } from 'react'

export class Todo extends Component {
    todoStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const {id, task} = this.props.todo;
        return (
            <div style={this.todoStyle()} onClick={this.props.markComplete.bind(this, id)}>
                <p> 
                { task } 
                </p>
            </div>
        )
    }
}

export default Todo
