import { call, put, delay } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from './action';
import { LoginTypes, Login } from './types';

export type LoginActionSagas = {
  payload: Login;
  type: LoginTypes;
};

export function* load(action: LoginActionSagas): object {
  try {
    //const response = yield call(api.get, '')
    const response: Login = {
      password: action.payload.password,
      token: action.payload.token,
      username: action.payload.username,
    };
    yield console.log('LOGIN ', action.payload);
    yield put(loginSuccess(response));
  } catch (err) {
    console.log('LOGIN ERROR -> ', err);
    yield put(loginFailure());
  }
}
