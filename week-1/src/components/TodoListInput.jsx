import React from 'react';
import { useState } from 'react';
import '../style/TodoListInput.css';

export default function TodoInput({ todos, setTodos }) {
  const [titleVal, setTitleVal] = useState('');
  const [bodyVal, setBodyVal] = useState('');

  const titleChangeHandler = (event) => setTitleVal(event.target.value);
  const bodyChangeHandler = (event) => setBodyVal(event.target.value);

  const submitHandler = () => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, title: titleVal, body: bodyVal, isDone: false }]);

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
