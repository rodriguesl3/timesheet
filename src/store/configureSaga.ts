import { takeLatest, all } from 'redux-saga/effects';
import { LoginTypes } from './Login/types';
import { load } from './Login/sagas';

export default function* watchSagas() {
  return yield all([takeLatest(LoginTypes.LOGIN_REQUEST, load)]);
}
