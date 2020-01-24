import { SideBar, SideBarTypes, SIDEBAR_INITIAL_STATE } from './types';
import { put } from 'redux-saga/effects';
import { sideBarSuccess } from './action';
import { loginFailure } from '../Login/action';

export type SideBarSagas = {
  payload: SideBar[];
  type: SideBarTypes;
};

export function* loadSideBar(action: SideBarSagas): object {
  try {
    //const response = yield call(api.get,'');
    console.log('Request menus => ', action.payload);
    const response: SideBar[] = SIDEBAR_INITIAL_STATE.sideBar ?? [];
    console.log(response);
    yield put(sideBarSuccess(response));
  } catch (err) {
    console.log('Error to get sidebar => ', err);
    yield put(loginFailure());
  }
}
