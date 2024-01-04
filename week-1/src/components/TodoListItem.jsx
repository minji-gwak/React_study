import React from 'react';
import '../style/TodoListItem.css';

export default function TodoItem({ todos, setTodos, doneStatus }) {
  const removeHandler = (targetId) => setTodos(todos.filter((todo) => todo.id !== targetId));

  const statusChangeHandler = (targetId) => {
    // map을 이용한 state 객체 key 값 변경
    setTodos(
      todos.map((todo) => {
        if (todo.id !== targetId) {
          return todo;
        } else {
          return { ...todo, isDone: !todo.isDone };
        }
      })
    );
  };

  // 현재 진행 여부에 해당되는 리스트만 담기
  const filteredTodos = todos.filter((todo) => todo.isDone === doneStatus);

  return (
    <div className="list-wrapper">
      {filteredTodos.map((todo) => {
        return (
          <div className="todo-container" key={todo.title}>
            <div>
              <h2 className="todo-title">{todo.title}</h2>
              <div>{todo.body}</div>
            </div>
            <div className="button-set">
              <button className="todo-delete-button button" onClick={() => removeHandler(todo.id)}>
                삭제하기
              </button>
              <button className="todo-complete-button button" onClick={() => statusChangeHandler(todo.id)}>
                {doneStatus ? '취소' : '완료'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
