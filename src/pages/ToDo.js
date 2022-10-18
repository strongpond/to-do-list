import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ToDoInsert from '../components/ToDoInsert';
import ToDoList from '../components/ToDoList';
import ToDoEdit from '../components/ToDoEdit';

let nextId = 4;

const ToDo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '투두리스트 만들기',
      checked: true,
    },
    {
      id: 2,
      text: '로그인 동작 구현하기',
      checked: true,
    },
    {
      id: 3,
      text: '리팩토링 및 css 수정하기',
      checked: false,
    },
  ]);

  const onInsertTodo = text => {
    console.log(text);
    if (text === '') {
      return alert('할 일을 입력해주세요.');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  useEffect(() => {
    if (!localStorage.getItem('jwt')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <MainTop>
      <FormBox>
        <ToDoHeader>{`TO DO LIST (${todos.length})`}</ToDoHeader>
        <ToDoInsert onInsertTodo={onInsertTodo}></ToDoInsert>
        <ToDoList todos={todos} onCheckToggle={onCheckToggle}></ToDoList>
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
