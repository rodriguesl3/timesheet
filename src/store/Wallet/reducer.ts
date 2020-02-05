import { WalletTypes, WalletState } from './types';
import { Reducer } from 'redux';

type WalletReducer = {
  type: WalletTypes;
  payload?: any;
};

const walletReducer: Reducer<WalletState> = (
  state: WalletState = { companies: [], failure: false, loading: false, success: false },
  action: WalletReducer,
) => {
  switch (action.type) {
    case WalletTypes.WALLET_REQUEST:
      return { ...state, failure: false, loading: true, success: false };
    case WalletTypes.WALLET_FAILURE:
      return { ...state, failure: true, loading: false, success: false };
    case WalletTypes.WALLET_SUCCESS:
      return { ...state, companies: action.payload, success: true, loading: false, failure: false };
    default:
      return state;
  }
};

export default walletReducer;
