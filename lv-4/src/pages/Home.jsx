import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../images/right-arrow.svg';
import { useNavigate } from 'react-router-dom';
import { Container } from '../styles/Common';
import AuthCheckHOC from '../HOC/AuthCheckHOC';

const Catalogue = ({ children, to }) => {
  const navigate = useNavigate();

  return (
    <List onClick={() => navigate(`/${to}`)}>
      <div>{children}</div>
      <ArrowIcon />
    </List>
  );
};

const Home = () => {
  return (
    <Container>
      <Title>무엇을 할까요?</Title>
      <Catalogue to="add">할일 기록하기</Catalogue>
      <Catalogue to="works">TODO LIST</Catalogue>
    </Container>
  );
};

const Title = styled.p`
  font-size: 30px;
  font-weight: bolder;
`;

const List = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 20px;
  width: 100%;
  height: 120px;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px;
  }

  > div {
    font-size: 24px;
  }
`;

export default React.memo(AuthCheckHOC(Home));
