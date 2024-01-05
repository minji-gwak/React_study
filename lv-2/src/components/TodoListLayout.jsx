import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoList';

function TodoListLayout() {
  const ListContainer = styled.div`
    padding: 0 24px;
  `;

  return (
    <ListContainer>
      <h2>Working.. 🔥</h2>
      <TodoItem doneStatus={false} />
      <h2>Done..! 🎉</h2>
      <TodoItem doneStatus={true} />
    </ListContainer>
  );
}

export default React.memo(TodoListLayout);
