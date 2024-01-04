import React from 'react';

export default function Component({ titleVal, changeHandler, submitHandler }) {
  return (
    <div className="input-container">
      <input type="text" name="" id="" placeholder="제목을 입력해주세요." onChange={changeHandler} value={titleVal} />
      <button type="button" onClick={submitHandler}>
        추가하기
      </button>
    </div>
  );
}
