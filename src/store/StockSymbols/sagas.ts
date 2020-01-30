import { StockSymbol, StockSymbolsState } from './types';
import api from '../../services';
import { stockSymbolsUrl } from '../../services/constant';
import { call, put } from 'redux-saga/effects';
import { stockSymbolSuccess, stockSymbolFailure } from './action';

export type StockSymbolSagas = {
  payload: string;
  type: StockSymbolsState;
};

function* parseHandleStockSymbols(jsonObject: any[], searchTerm: string): Generator<StockSymbol[]> {
  return yield jsonObject
    .filter(elm => elm['Company Name'].contains(searchTerm) || elm['Symbol'].contains(searchTerm))
    .map(
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
    const parseResponse = yield parseHandleStockSymbols(response.data, action.payload.toString());
    yield put(stockSymbolSuccess(parseResponse));
  } catch (err) {
    yield put(stockSymbolFailure(err));
  }
}
