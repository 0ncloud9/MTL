import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, onDelete, onToggleStatus }) => {
  return (
    <ItemWrap>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoDetail>{todo.workTodo}</TodoDetail>
      <DeleteBtn onClick={() => onDelete(todo.id)}>삭제</DeleteBtn>
      {todo.status === "Working" ? (
        <StatusBtn onClick={() => onToggleStatus(todo.id, "Done")}>완료</StatusBtn>
      ) : (
        <StatusBtn onClick={() => onToggleStatus(todo.id, "Working")}>취소</StatusBtn>
      )}
    </ItemWrap>
  );
};

export default TodoItem;

const ItemWrap = styled.div`
  padding: 24px;
  width: 1200px;
  height: auto;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TodoTitle = styled.div`
  font-size: 24px;
  flex: 1;
`;

const TodoDetail = styled.div`
  font-size: 18px;
  flex: 2;
`;

const DeleteBtn = styled.button`
  height: 48px;
  background-color: red;
  color: white;
`;

const StatusBtn = styled.button`
  height: 48px;
  background-color: ${props => (props.children === '완료' ? '#00ff8c' : '#006aff')};
  color: white;
`;
