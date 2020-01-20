import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginTypes, Login } from '../store/Login/types';

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const submitLoginHandler = (): void => {
    const user: Login = {
      password: '123123',
      username: 'user@test.com',
      token: '',
    };
    dispatch({
      type: LoginTypes.LOGIN_REQUEST,
      payload: user,
    });
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={submitLoginHandler}>Submit</button>
    </div>
  );
};

export default LoginForm;
