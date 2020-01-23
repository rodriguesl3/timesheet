import React, { FC, useState } from 'react';
import { TextField, Button } from 'bold-ui';
import { Login, LoginTypes } from '../../store/Login/types';
import { useDispatch } from 'react-redux';
import { ButtonsContainer, LoginFormContainer } from './LoginForm.style';

const LoginFormContent: FC = () => {
  const [credentials, setCredentials] = useState<Login>({ username: '', password: '', token: '' });
  const dispatch = useDispatch();
  const submitLoginHandler = (): void => {
    dispatch({
      type: LoginTypes.LOGIN_REQUEST,
      payload: credentials,
    });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <LoginFormContainer>
      <TextField
        name="username"
        label="Username"
        placeholder="Enter your user name"
        value={credentials.username}
        onChange={onChangeHandler}
        required
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={credentials.password}
        onChange={onChangeHandler}
        required
      />
      <ButtonsContainer>
        <Button kind="normal" size="medium" onClick={submitLoginHandler}>
          Login
        </Button>
        <Button kind="normal" size="medium" skin="outline" onClick={submitLoginHandler}>
          Sign up
        </Button>
      </ButtonsContainer>
    </LoginFormContainer>
  );
};

export default LoginFormContent;
