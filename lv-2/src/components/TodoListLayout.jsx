import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoList';

function TodoListLayout() {
  return (
    <ListContainer>
      <h2>Working.. 🔥</h2>
      <TodoItem doneStatus={false} />
      <h2>Done..! 🎉</h2>
      <TodoItem doneStatus={true} />
    </ListContainer>
  );
}

const ListContainer = styled.div`
  padding: 0 24px;
`;

export default React.memo(TodoListLayout);
