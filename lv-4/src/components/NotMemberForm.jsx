import React from 'react';
import userApi from '../axios/userApi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import Input from './Input';
import Button from './Button';
import { SHA256 } from 'crypto-js';
import { setCookie } from '../storage/cookie';

const NotMemberForm = ({ type }) => {
  const navigate = useNavigate();

  const [id, idChangeHandler, idClearHandler] = useInput();
  const [password, passwordChangeHandler, passwordClearHandler] = useInput();

  const task = type === 'login' ? '로그인' : '회원가입';

  const signupHandler = async () => {
    if (!id.length || !password.length) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    const body = {
      id,
      password: SHA256(password).toString(),
    };

    await userApi
      .post('register', body)
      .then(() => {
        idClearHandler();
        passwordClearHandler();
        navigate('/login');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const loginHandler = async () => {
    if (!id.length || !password.length) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    const body = {
      id,
      password: SHA256(password).toString(),
    };

    await userApi
      .post('login', body)
      .then((response) => {
        setCookie('token', response.data.token, {
          path: '/',
          sameSite: 'strict',
        });
        idClearHandler();
        passwordClearHandler();
        return navigate('/');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <FormBox>
        <Title>{task}</Title>
        <Input type="text" onChange={idChangeHandler} value={id} placeholder="아이디를 입력해주세요.">
          아이디
        </Input>
        <Input type="password" onChange={passwordChangeHandler} value={password} placeholder="비밀번호를 입력해주세요.">
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
