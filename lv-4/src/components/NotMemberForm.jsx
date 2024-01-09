import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from './Input';

const NotMemberForm = ({ type }) => {
  const navigate = useNavigate();
  const task = type === 'login' ? '로그인' : '회원가입';
  const loginHandler = () => {
    navigate('/');
  };
  const signupHandler = () => {
    navigate('/login');
  };
  return (
    <>
      <FormBox>
        <Title>{task}</Title>
        <Input type="text" placeholder="아이디를 입력해주세요.">
          아이디
        </Input>
        <Input type="password" placeholder="비밀번호를 입력해주세요.">
          비밀번호
        </Input>
        <Button onClick={() => (type === 'login' ? loginHandler() : signupHandler())}>{task}</Button>

        {type === 'login' ? (
          <PageChangeBox>
            <p>회원가입을 안 하셨나요?</p>
            <PageChangeButton onClick={() => navigate('/signup')}>회원가입</PageChangeButton>
          </PageChangeBox>
        ) : (
          <PageChangeBox>
            <p>이미 가입 하셨나요?</p>
            <PageChangeButton onClick={() => navigate('/login')}>로그인</PageChangeButton>
          </PageChangeBox>
        )}
      </FormBox>
    </>
  );
};

const FormBox = styled.div`
  padding: 150px 100px;
`;

const Title = styled.h1`
  text-align: center;
  letter-spacing: 3px;
  font-weight: bolder;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 40px;
  padding: 13px 15px;
  background-color: #ff0558;
  color: white;
  border: none;
  border-radius: 10px;
  &:hover {
    opacity: 70%;
  }
`;

const PageChangeBox = styled.div`
  font-size: 14px;
  margin-top: 30px;
  text-align: center;
  color: #ff0558;
`;

const PageChangeButton = styled.p`
  font-weight: bolder;
  &:hover {
    opacity: 70%;
  }
`;

export default NotMemberForm;
