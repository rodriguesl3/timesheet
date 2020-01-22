import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginTypes, Login, LoginState } from '../../store/Login/types';
import { TextField, Button } from 'bold-ui';
import { LoginContainer, LoginFormContainer, ButtonsContainer } from './LoginForm.style';

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state: LoginState) => state);
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
    <LoginContainer>
      <LoginFormContainer>
        <h1>LOGIN PAGE</h1>
        <TextField
          name="name"
          label="Name"
          placeholder="Enter your full name"
          // value={formState.name}
          // onChange={handleChange('name')}
          required
        />
        <TextField
          name="name"
          label="Name"
          placeholder="Enter your full name"
          // value={formState.name}
          // onChange={handleChange('name')}
          required
        />
        <ButtonsContainer>
          <Button kind="normal" size="small" onClick={submitLoginHandler}>
            Sign in
          </Button>
          <Button kind="normal" size="small" onClick={submitLoginHandler}>
            Sign up
          </Button>
        </ButtonsContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default LoginForm;
