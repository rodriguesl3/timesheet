import React, { FC, useEffect } from 'react';
import { LoginContainer } from '../../components/Login/LoginForm.style';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import DescriptionContainer from '../../components/Login/Description';
import { LoginState } from '../../store/Login/types';
import LoginFormContent from '../../components/Login/LoginFormContent';

const LoginForm: FC = () => {
  const history = useHistory();
  const loginState = useSelector((state: LoginState) => state);

  useEffect(() => {
    if (loginState.loginSuccess === true && loginState.credential && loginState.credential.username) {
      toast.success(`Welcome ${loginState.credential.username}, we are redirecting you`);
      setTimeout(() => history.push('/main'), 3500);
    }
  }, [loginState.loginSuccess]);

  return (
    <LoginContainer>
      <DescriptionContainer />
      <LoginFormContent />
    </LoginContainer>
  );
};
export default LoginForm;
