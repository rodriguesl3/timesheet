import { call, put, delay } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from './action';
import { LoginTypes, Login } from './types';
import { toast } from 'react-toastify';

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
    toast.success('success');
    console.log('LOGIN ', action.payload);
    yield put(loginSuccess(response));
  } catch (err) {
    toast.error('Error to authenticate your user ' + err);
    console.log('LOGIN ERROR -> ', err);
    yield put(loginFailure());
  }
}
