import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


const Title = styled.div`
  text-align: center;
  font-weight: bolder;
  font-size: 3rem;
  margin: 2rem 0;
`;

// Do we need to connect Container?
export default function Container() {
  return (
    <div>
      <Title>Todo App</Title>
      <TodoList />
      <TodoForm />
    </div>
  );
}