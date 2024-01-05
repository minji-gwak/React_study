import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTodo, deleteTodo } from '../redux/modules/todoList';
import { getTodoById } from '../redux/modules/todoList';

function TodoList({ doneStatus }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList.todos);

  // // 현재 진행 여부에 해당되는 리스트만 담기
  const filteredTodos = todos.filter((todo) => todo.isDone === doneStatus);

  return (
    <ListWrapper>
      {filteredTodos.map((todo) => {
        return (
          <TodoContainer key={todo.id}>
            <Link
              to={`/${todo.id}`}
              onClick={() => {
                dispatch(getTodoById(todo.id));
              }}
            >
              <div>상세보기</div>
            </Link>
            <div>
              <h2>{todo.title}</h2>
              <div>{todo.body}</div>
            </div>
            <ButtonSet>
              <TodoDeleteButton onClick={() => dispatch(deleteTodo(todo.id))}>삭제하기</TodoDeleteButton>
              <TodoCompleteButton onClick={() => dispatch(toggleStatusTodo(todo.id))}>
                {doneStatus ? '취소' : '완료'}
              </TodoCompleteButton>
            </ButtonSet>
          </TodoContainer>
        );
      })}
    </ListWrapper>
  );
}

const Button = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;
const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
const TodoDeleteButton = styled(Button)`
  background-color: #fff;
  border: 2px solid red;
`;
const TodoCompleteButton = styled(Button)`
  background-color: #fff;
  border: 2px solid green;
`;

export default React.memo(TodoList);
