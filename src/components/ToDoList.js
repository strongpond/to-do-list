import React from 'react';
import styled from 'styled-components';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ todos, onCheckToggle }) => {
  return (
    <TDList className="ToDoList">
      {todos.map(todo => (
        <ToDoListItem item={todo} onCheckToggle={onCheckToggle} key={todo.id} />
      ))}
    </TDList>
  );
};

export default ToDoList;

const TDList = styled.ul`
  margin: 20px;
  padding: 5px;
  width: 80%;
  overflow: auto;
`;
