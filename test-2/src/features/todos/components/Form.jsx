import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { addTodo } from '../../../redux/modules/todos.js';

const Form = () => {
  const dispatch = useDispatch();
  const id = nextId();
  const [input, setInput] = useState({ title: '', body: '' });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (input.title.trim() === '' || input.body.trim() === '') return;

    const todo = {
      id: id,
      title: input.title,
      body: input.body,
      isDone: false,
    };

    setInput({ title: '', body: '' });
    dispatch(addTodo(todo));
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput type="text" name="title" value={input.title} onChange={onChangeHandler} />
        <StFormLabel>내용</StFormLabel>
        <StAddInput type="text" name="body" value={input.body} onChange={onChangeHandler} />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
