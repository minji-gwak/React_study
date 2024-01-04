import './styles/App.css';
import { useState } from 'react';
import InputContainer from './components/InputContainer';
import TodoList from './components/TodoList';

function App() {
  const [titleVal, setTitleVal] = useState('');
  const [todos, setTodos] = useState(['React를 배워봅시다.', 'useState를 배워봅시다.', 'JavaScript를 배워봅시다.']);

  const changeHandler = (e) => setTitleVal(e.target.value);
  const submitHandler = () => {
    setTodos([...todos, titleVal]);
    setTitleVal('');
  };

  return (
    <div className="layout">
      <InputContainer titleVal={titleVal} changeHandler={changeHandler} submitHandler={submitHandler} />
      <h2 className="title">Todo List</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
