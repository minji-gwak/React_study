import React from 'react';

function TodoInput({ titleVal, bodyVal, titleChangeHandler, bodyChangeHandler, submitHandler }) {
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

export default TodoInput;
