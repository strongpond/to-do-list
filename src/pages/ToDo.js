import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ToDoInsert from '../components/ToDoInsert';
import ToDoList from '../components/ToDoList';
import ToDoEdit from '../components/ToDoEdit';
import { createToDoAPI, getToDosAPI } from '../api/todo';

const ToDo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const token = localStorage.getItem('jwt');

  const onInsertTodo = async text => {
    if (text === '') {
      return alert('할 일을 입력해주세요.');
    } else {
      const result = await createToDoAPI(text, token);
      setTodos(prev => [...prev, result.data]);
    }
  };

  const getTodoList = useCallback(async () => {
    const result = await getToDosAPI(token);
    setTodos(result.data);
  }, [token]);

  useEffect(() => {
    if (!token) {
      navigate('/');
    } else {
      getTodoList();
    }
  }, [getTodoList, navigate, token]);

  return (
    <MainTop>
      <FormBox>
        <ToDoHeader>{`TO DO LIST (${todos.length})`}</ToDoHeader>
        <ToDoInsert onInsertTodo={onInsertTodo}></ToDoInsert>
        <ToDoList todos={todos} token={token} setTodos={setTodos}></ToDoList>
        <ToDoEdit />
      </FormBox>
    </MainTop>
  );
};

export default ToDo;

const MainTop = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.form`
  ${({ theme }) => theme.flex(null, 'center', 'column')};
  position: relative;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

const ToDoHeader = styled.h1`
  margin: 40px;
  font-size: 30px;
  color: rebeccapurple;
`;
