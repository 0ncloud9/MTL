import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #dde3ee;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const App = () => {
  const [todoData, setTodoData] = useState(() => {
    const storedTodo = localStorage.getItem("todoData");
    return storedTodo ? JSON.parse(storedTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  const addTodo = (newTodo) => {
    setTodoData(prevData => [...prevData, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodoData(todoData.filter(todo => todo.id !== id));
  };

  const toggleStatus = (id, newStatus) => {
    setTodoData(
      todoData.map(todo =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <TodoForm addTodo={addTodo} />
      <TodoList todoData={todoData} deleteTodo={deleteTodo} toggleStatus={toggleStatus} />
    </>
  );
};

export default App;
