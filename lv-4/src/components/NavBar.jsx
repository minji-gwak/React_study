import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../images/home.svg';

const NavBar = () => {
  const navigate = useNavigate();
  const locationNow = useLocation();

  const logoutHandler = () => {
    navigate('/login');
  };

  if (locationNow.pathname === '/login' || locationNow.pathname === '/signup') {
    return null;
  }

  return (
    <Container>
      <HomeIcon onClick={() => navigate('/')} />
      <div onClick={logoutHandler}>로그아웃</div>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1px solid rgb(240, 240, 240);

  > svg {
    margin-left: 20px;
  }
  > div {
    font-weight: bolder;
    margin-right: 20px;
  }
`;

export default React.memo(NavBar);
