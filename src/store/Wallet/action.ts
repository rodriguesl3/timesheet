import { EmptyAction, PayloadAction, action } from 'typesafe-actions';
import { Symbols } from 'recharts';
import { WalletTypes, Company } from './types';

export const walletRequest = (symbols: Symbols[]): PayloadAction<WalletTypes.WALLET_REQUEST, Symbols[]> =>
  action(WalletTypes.WALLET_REQUEST, symbols);

export const walletSuccess = (companies: Company[]): PayloadAction<WalletTypes.WALLET_SUCCESS, Company[]> =>
  action(WalletTypes.WALLET_SUCCESS, companies);

export const walletFailure = (error: object): PayloadAction<WalletTypes.WALLET_FAILURE, object> =>
  action(WalletTypes.WALLET_FAILURE, error);
