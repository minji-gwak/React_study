import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../redux/modules/todoList';
import '../style/TodoListInput.css';

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
    dispatch(createTodo(todo));
    setTitleVal('');
    setBodyVal('');
  };

  return (
    <div className="input-container">
      <div className="input-group">
        <label className="input-label">제목</label>
        <input
          type="text"
          name="title"
          className="add-input input-body"
          onChange={titleChangeHandler}
          value={titleVal}
        />
        <label className="input-label">내용</label>
        <input type="text" name="body" className="add-input" onChange={bodyChangeHandler} value={bodyVal} />
      </div>
      <button className="add-button" onClick={submitHandler}>
        추가하기
      </button>
    </div>
  );
}

export default React.memo(TodoListInput);
