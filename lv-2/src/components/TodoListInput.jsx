import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todoList';

function TodoListInput() {
  const dispatch = useDispatch();
  const [titleVal, setTitleVal] = useState('');
  const [bodyVal, setBodyVal] = useState('');
  const todos = useSelector((state) => state.todoList.todos);
  const todoId = useRef(todos.length !== 0 ? todos[todos.length - 1].id : 0);

  const titleChangeHandler = (event) => setTitleVal(event.target.value);
  const bodyChangeHandler = (event) => setBodyVal(event.target.value);

  const submitHandler = () => {
    todoId.current++;
    const todo = { id: todoId.current, title: titleVal, body: bodyVal, isDone: false };
    dispatch(addTodo(todo));
    setTitleVal('');
    setBodyVal('');
  };

  const InputContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
    background-color: #eee;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  `;
  const AddButton = styled.button`
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
    background-color: teal;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    height: 40px;
    width: 140px;
  `;
  const InputGroup = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
  `;
  const InputLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
  `;
  const AddInput = styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
  `;

  return (
    <InputContainer>
      <InputGroup>
        <InputLabel>제목</InputLabel>
        <AddInput type="text" name="title" onChange={titleChangeHandler} value={titleVal} />
        <InputLabel>내용</InputLabel>
        <AddInput type="text" name="body" onChange={bodyChangeHandler} value={bodyVal} />
      </InputGroup>
      <AddButton onClick={submitHandler}>추가하기</AddButton>
    </InputContainer>
  );
}

export default React.memo(TodoListInput);
