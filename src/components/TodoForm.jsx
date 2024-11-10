import React, { useState } from 'react';
import styled from 'styled-components';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [workTodo, setWorkTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!title || !workTodo) {
      alert("제목과 내용을 모두 입력해주세요");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      workTodo,
      status: "Working",
    };

    addTodo(newTodo);
    setTitle('');
    setWorkTodo('');
  };

  return (
    <>
      <TodoListWrapper>
        <Title1>My Todo List</Title1>
        <Title2>React</Title2>
      </TodoListWrapper>
      <InputList onSubmit={handleAddTodo}>
        <label>제목</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>내용</label>
        <input type="text" value={workTodo} onChange={(e) => setWorkTodo(e.target.value)} required />
        <InputBtn type="submit">추가하기</InputBtn>
      </InputList>
    </>
  );
};

export default TodoForm;

// 스타일 컴포넌트
const TodoListWrapper = styled.div`
    padding: 24px;
    width: 1200px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: row;
`;

const Title1 = styled.div``;
const Title2 = styled.div`
    margin-left: auto;
`;

const InputList = styled.form`
    padding: 24px;
    width: 1200px;
    background-color: #dddddd;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 32px;
`;

const InputBtn = styled.button`
    height: 48px;
`;
