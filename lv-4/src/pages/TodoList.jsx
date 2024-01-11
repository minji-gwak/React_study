import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getTodos } from '../redux/modules/todoSlice';
import AuthCheckHOC from '../HOC/AuthCheckHOC';
import Loading from '../components/Loading';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default React.memo(AuthCheckHOC(TodoList));
