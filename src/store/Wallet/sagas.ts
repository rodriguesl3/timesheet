import { WalletTypes, Company } from './types';
import { fullUrlBatchWalletInformation } from '../../services/constant';
import { call, put } from 'redux-saga/effects';
import api from '../../services';
import { walletSuccess, walletFailure } from './action';
import mockData from './mock.json';

type selectTableList = {
  value: string;
  label: string;
};

export type WalletSagas = {
  type: WalletTypes;
  payload: selectTableList[];
};

function* parseCompany(response: any, symbols: string[]): Generator<Company[]> {
  symbols = ['GOOG', 'MSFT', 'AAPL'];
  const parseResponse = symbols.map(
    elm =>
      ({
        symbol: elm,
        chart: response[elm]['chart'],
        news: response[elm]['news'],
        quote: response[elm]['quote'],
      } as Company),
  );

  return parseResponse;
}

export function* loadWalletInformation(action: WalletSagas): object {
  try {
    const symbols = action.payload.map(elm => elm.value);
    // const apiResponse = yield call(api.get, fullUrlBatchWalletInformation(symbols));
    const apiResponse = { data: mockData };
    const parseResponse = yield parseCompany(apiResponse.data, symbols);
    yield put(walletSuccess(parseResponse));
  } catch (err) {
    yield put(walletFailure(err));
  }
}
