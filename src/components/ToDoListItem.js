import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { BsPencilFill, BsTrashFill } from 'react-icons/bs';
import styled from 'styled-components';

const ToDoListItem = ({ item, onCheckToggle, deleteTodoList, token }) => {
  const { id, todo, isCompleted } = item;
  return (
    <ListItem>
      <ItemBox className={`${isCompleted ? 'isCompleted' : ''}`}>
        {isCompleted ? (
          <MdCheckBox className="logo" onClick={() => onCheckToggle(id)} />
        ) : (
          <MdCheckBoxOutlineBlank
            className="logo"
            onClick={() => onCheckToggle(id)}
          />
        )}
        <div className="todo">{todo}</div>
      </ItemBox>
      <EditBox>
        <BsPencilFill className="edit" />
        <BsTrashFill
          className="remove"
          onClick={() => deleteTodoList(id, token)}
        />
      </EditBox>
    </ListItem>
  );
};

export default ToDoListItem;

const ListItem = styled.li`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px #828282;
  padding: 1rem;
  display: flex;
  align-items: center;

  + li {
    margin-top: 15px;
  }
`;

const ItemBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;

  .logo {
    font-size: 1.5rem;
    color: #029d06;
  }

  .todo {
    margin-left: 0.5rem;
    flex: 1;
  }

  .isCompleted .todo {
    color: #6c567b;
    text-decoration: line-through;
    cursor: pointer;
    opacity: 0.6;
  }
`;

const EditBox = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  }

  .edit {
    cursor: pointer;
  }

  .remove {
    cursor: pointer;
  }
`;
