import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoListLayout';
import TodoInput from '../components/TodoListInput';

function App() {
  return (
    <Layout>
      <Container>
        <div>My Todo List</div>
        <div>React</div>
      </Container>
      <TodoInput />
      <TodoList />
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

const Container = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;

export default React.memo(App);
