import React, { FC, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginTypes, Login, LoginState } from '../../store/Login/types';
import { TextField, Button } from 'bold-ui';
import { LoginContainer, LoginFormContainer, ButtonsContainer, Description, Line } from './LoginForm.style';

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  // const loginState = useSelector((state: LoginState) => state);
  const [credentials, setCredentials] = useState<Login>({ username: '', password: '', token: '' });

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
    <LoginContainer>
      <Description>
        <h1>TIMESHEET PROJECT</h1>
        <Line />
        <div>
          O que é o Lorem Ipsum? O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum
          tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os
          caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o
          salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a
          disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os
          programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
        </div>
      </Description>
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
    </LoginContainer>
  );
};

export default LoginForm;
