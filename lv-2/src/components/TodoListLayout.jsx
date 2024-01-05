import React from 'react';
import TodoItem from './TodoList';
import '../style/TodoListLayout.css';

function TodoListLayout() {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <TodoItem doneStatus={false} />
      <h2 className="list-title">Done..! 🎉</h2>
      <TodoItem doneStatus={true} />
    </div>
  );
}

export default React.memo(TodoListLayout);
