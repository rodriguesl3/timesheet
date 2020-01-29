import { StockSymbol, StockSymbolsState } from './types';
import api from '../../services';
import { stockSymbolsUrl } from '../../services/constant';
import { call, put } from 'redux-saga/effects';
import { stockSymbolSuccess, stockSymbolFailure } from './action';

export type StockSymbolSagas = {
  payload: StockSymbol[];
  type: StockSymbolsState;
};

function* parseHandleStockSymbols(jsonObject: any[]): Generator<StockSymbol[]> {
  return jsonObject.map(
    (obj: any) =>
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <StockSymbol>{
        companyName: obj['Company Name'],
        symbol: obj['Symbol'],
      },
  );
}
export function* loadStockSymbols(action: StockSymbolSagas): object {
  try {
    const response = yield call(api.get, stockSymbolsUrl);
    const parseResponse = yield parseHandleStockSymbols(response.data);
    yield put(stockSymbolSuccess(parseResponse));
  } catch (err) {
    yield put(stockSymbolFailure(err));
  }
}
