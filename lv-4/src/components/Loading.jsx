import React from 'react';
import Spinner from '../images/spinner.gif';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <img src={Spinner} alt="로딩 중" width="30%" />
    </Container>
  );
};

const Container = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
`;

export default Loading;
