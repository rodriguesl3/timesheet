import { Reducer } from 'redux';
import { StockSymbolsTypes, StockSymbolsState, STOCKSYMBOLS_INITIAL_STATE } from './types';

type SotckSymbolReducer = {
  type: StockSymbolsTypes;
  payload?: any;
};

const stockSymbolReducer: Reducer<StockSymbolsState> = (
  state: StockSymbolsState = STOCKSYMBOLS_INITIAL_STATE,
  action: SotckSymbolReducer,
) => {
  switch (action.type) {
    case StockSymbolsTypes.STOCKSYMBOLS_SUCCESS:
      return { ...state, stockSymbol: [...(action.payload ?? [])], success: true, failure: false };
    case StockSymbolsTypes.STOCKSYMBOLS_FAILURE:
      return { ...state, failure: true, success: false };
    default:
      return { ...state };
  }
};

export default stockSymbolReducer;
