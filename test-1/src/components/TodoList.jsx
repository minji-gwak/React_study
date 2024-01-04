import React from 'react';

export default function Component({ todos }) {
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return <div className="todo-box">{todo}</div>;
      })}
    </div>
  );
}
