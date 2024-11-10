import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = ({ todoData, deleteTodo, toggleStatus }) => {
  return (
    <>
      <WorkingStatus>Working</WorkingStatus>
      {todoData
        .filter(todo => todo.status === "Working")
        .map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggleStatus={toggleStatus} />
        ))}

      <DoneStatus>Done</DoneStatus>
      {todoData
        .filter(todo => todo.status === "Done")
        .map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggleStatus={toggleStatus} />
        ))}
    </>
  );
};

export default TodoList;

const WorkingStatus = styled.div`
  font-size: 16pt;
  font-weight: 500;
  margin: 16px 0 16px 0;
  color: #00ff8c;
`;

const DoneStatus = styled.div`
  font-size: 16pt;
  font-weight: 500;
  margin: 16px 0 16px 0;
  color: #006aff;
`;
