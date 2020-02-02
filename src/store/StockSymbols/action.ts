import { EmptyAction, action, PayloadAction } from 'typesafe-actions';
import { StockSymbolsTypes, StockSymbol } from './types';

export const stockSymbolRequest = (): EmptyAction<StockSymbolsTypes.STOCKSYMBOLS_REQUEST> =>
  action(StockSymbolsTypes.STOCKSYMBOLS_REQUEST);

export const stockSymbolSuccess = (
  stockSymbols: StockSymbol[],
): PayloadAction<StockSymbolsTypes.STOCKSYMBOLS_SUCCESS, StockSymbol[]> =>
  action(StockSymbolsTypes.STOCKSYMBOLS_SUCCESS, stockSymbols);

export const stockSymbolFailure = (error: object): PayloadAction<StockSymbolsTypes.STOCKSYMBOLS_FAILURE, object> =>
  action(StockSymbolsTypes.STOCKSYMBOLS_FAILURE, error);

export const stockSymbolFilter = (searchTerm: string): PayloadAction<StockSymbolsTypes.STOCKSIMBOLS_FILTER, string> =>
  action(StockSymbolsTypes.STOCKSIMBOLS_FILTER, searchTerm);
