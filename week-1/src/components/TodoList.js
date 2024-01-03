import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeHandler }) {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <TodoItem todos={todos} doneStatus={false} removeHandler={removeHandler} />
      <h2 className="list-title">Done..! 🎉</h2>
      <TodoItem todos={todos} doneStatus={true} removeHandler={removeHandler} />
    </div>
  );
}

export default React.memo(TodoList);
