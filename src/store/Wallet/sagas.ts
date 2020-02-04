import { WalletTypes, Company } from './types';
import { fullUrlBatchWalletInformation } from '../../services/constant';
import { call, put } from 'redux-saga/effects';
import api from '../../services';
import { StockSymbol } from '../StockSymbols/types';
import { walletSuccess, walletFailure } from './action';

export type WalletSagas = {
  type: WalletTypes;
  payload: StockSymbol[];
};

function* parseCompany(response: any, symbols: string[]): Generator<Company[]> {
  return symbols.map(
    elm =>
      ({
        symbol: elm,
        chart: response[elm]['chart'],
        news: response[elm]['news'],
        quote: response[elm]['quote'],
      } as Company),
  );
}

export function* loadWalletInformation(action: WalletSagas): object {
  try {
    const symbols = action.payload.map(elm => elm.symbol);
    const apiResponse = yield call(api.get, fullUrlBatchWalletInformation(symbols));
    const parseResponse = yield parseCompany(apiResponse, symbols);
    yield put(walletSuccess(parseResponse));
  } catch (err) {
    yield put(walletFailure(err));
  }
}
