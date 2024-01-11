import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../storage/cookie';

const AuthCheckHOC = (WrappedComponent) => {
  const WithAuthCheck = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkTokenAndNavigate = async () => {
        const token = await getCookie('token');

        if (!token) {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }
      };

      checkTokenAndNavigate();
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthCheck;
};

export default AuthCheckHOC;
