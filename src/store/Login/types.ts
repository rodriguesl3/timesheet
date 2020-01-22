import Login from '../../container/Login/LoginForm';

export enum LoginTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

export interface LoginState {
  credential?: Login;
  loginSuccess: boolean;
  loginFailure: boolean;
  loginRequest: boolean;
}

export interface Login {
  username: string;
  password: string;
  token: string;
}

export const LOGIN_INITIAL_STATE: LoginState = {
  loginFailure: false,
  loginSuccess: false,
  loginRequest: true,
};
