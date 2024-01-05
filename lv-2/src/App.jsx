import './style/App.css';
import React from 'react';
import TodoList from './components/TodoListLayout';
import TodoInput from './components/TodoListInput';

function App() {
  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default React.memo(App);
