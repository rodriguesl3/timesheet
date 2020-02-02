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
    case StockSymbolsTypes.STOCKSIMBOLS_FILTER:
      const filtered = state.stockSymbol.filter(elm => elm.companyName.includes(action.payload));
      const response = filtered.length > 20 ? filtered : filtered;
      return { ...state, stockSymbolFiltered: [...response.slice(0, 30)] };
    case StockSymbolsTypes.STOCKSYMBOLS_SUCCESS:
      return { ...state, stockSymbol: [...(action.payload ?? [])], success: true, failure: false };
    case StockSymbolsTypes.STOCKSYMBOLS_FAILURE:
      return { ...state, failure: true, success: false };
    default:
      return { ...state };
  }
};

export default stockSymbolReducer;
