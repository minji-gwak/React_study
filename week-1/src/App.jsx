import './style/App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default function App() {
  const [titleVal, setTitleVal] = useState('');
  const [bodyVal, setBodyVal] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, title: '민지', body: '민지 행복하기', isDone: true },
    { id: 2, title: '리액트', body: '리액트 공부하기', isDone: false },
    { id: 3, title: '컴포넌트', body: '컴포넌트 스타일링 하기', isDone: false },
  ]);
  const titleChangeHandler = (event) => setTitleVal(event.target.value);
  const bodyChangeHandler = (event) => setBodyVal(event.target.value);

  const submitHandler = () => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, title: titleVal, body: bodyVal, isDone: false }]);

    setTitleVal('');
    setBodyVal('');
  };

  const removeHandler = (targetId) => setTodos(todos.filter((todo) => todo.id !== targetId));

  const statusChangeHandler = (targetId) => {
    const findIdx = todos.findIndex((todo) => todo.id === targetId);
    const copiedTodos = [...todos];
    copiedTodos[findIdx].isDone = !copiedTodos[findIdx].isDone;
    setTodos(copiedTodos);
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <TodoInput
        titleVal={titleVal}
        bodyVal={bodyVal}
        titleChangeHandler={titleChangeHandler}
        bodyChangeHandler={bodyChangeHandler}
        submitHandler={submitHandler}
      />
      <TodoList todos={todos} removeHandler={removeHandler} statusChangeHandler={statusChangeHandler} />
    </div>
  );
}
