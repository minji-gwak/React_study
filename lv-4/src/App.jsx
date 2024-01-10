import Router from './shared/Router';
import styled from 'styled-components';
import { GlobalStyle } from './styles/Common';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Container>
          <Router />
        </Container>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  background-color: rgb(240, 240, 240);
`;

const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export default App;
