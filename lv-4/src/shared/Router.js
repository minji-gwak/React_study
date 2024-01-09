import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import AddTodo from '../pages/AddTodo';
import TodoList from '../pages/TodoList';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/add" element={<AddTodo />}></Route>
        <Route path="/works" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
