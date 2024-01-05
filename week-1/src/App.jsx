import './style/App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoListLayout';
import TodoInput from './components/TodoListInput';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: '민지', body: '민지 행복하기', isDone: true },
    { id: 2, title: '리액트', body: '리액트 공부하기', isDone: false },
    { id: 3, title: '컴포넌트', body: '컴포넌트 스타일링 하기', isDone: false },
  ]);

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default React.memo(App);
