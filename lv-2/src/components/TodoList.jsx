import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/modules/todoList';
import '../style/TodoList.css';

function TodoList({ doneStatus }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList.todos);

  // // 현재 진행 여부에 해당되는 리스트만 담기
  const filteredTodos = todos.filter((todo) => todo.isDone === doneStatus);

  return (
    <div className="list-wrapper">
      {filteredTodos.map((todo) => {
        return (
          <div className="todo-container" key={todo.id}>
            <div>
              <h2 className="todo-title">{todo.title}</h2>
              <div>{todo.body}</div>
            </div>
            <div className="button-set">
              <button className="todo-delete-button button" onClick={() => dispatch(deleteTodo(todo.id))}>
                삭제하기
              </button>
              <button className="todo-complete-button button" onClick={() => dispatch(updateTodo(todo.id))}>
                {doneStatus ? '취소' : '완료'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(TodoList);
