import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeHandler, statusChangeHandler }) {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <TodoItem
        todos={todos}
        doneStatus={false}
        removeHandler={removeHandler}
        statusChangeHandler={statusChangeHandler}
      />
      <h2 className="list-title">Done..! 🎉</h2>
      <TodoItem
        todos={todos}
        doneStatus={true}
        removeHandler={removeHandler}
        statusChangeHandler={statusChangeHandler}
      />
    </div>
  );
}

export default React.memo(TodoList);
