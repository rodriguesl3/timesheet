import { action, PayloadAction, EmptyAction } from 'typesafe-actions';
import { Login, LoginTypes } from './types';

export const loginRequest = (login: Login): PayloadAction<LoginTypes.LOGIN_REQUEST, Login> =>
  action(LoginTypes.LOGIN_REQUEST, login);
export const loginSuccess = (response: Login): PayloadAction<LoginTypes.LOGIN_SUCCESS, Login> =>
  action(LoginTypes.LOGIN_SUCCESS, response);
export const loginFailure = (): EmptyAction<LoginTypes.LOGIN_FAILURE> => action(LoginTypes.LOGIN_FAILURE);
