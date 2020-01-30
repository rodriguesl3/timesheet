import { takeLatest, all, ForkEffect, AllEffect } from 'redux-saga/effects';
import { LoginTypes } from './Login/types';
import { load } from './Login/sagas';
import { SideBarTypes } from './Sidebar/types';
import { loadSideBar } from './Sidebar/sagas';
import { StockSymbolsTypes } from './StockSymbols/types';
import { loadStockSymbols } from './StockSymbols/sagas';

export default function* watchSagas(): Generator<AllEffect<object>> {
  return yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, load),
    takeLatest(SideBarTypes.SIDEBAR_REQUEST, loadSideBar),
    takeLatest(StockSymbolsTypes.STOCKSYMBOLS_REQUEST, loadStockSymbols),
  ]);
}
