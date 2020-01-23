import { Reducer } from 'redux';
import { LoginState, LOGIN_INITIAL_STATE, LoginTypes } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loginReducer: Reducer<LoginState> = (state: LoginState = LOGIN_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LoginTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginRequest: true,
        loginFailure: false,
        loginSuccess: true,
      };

    case LoginTypes.LOGIN_FAILURE:
      return {
        ...state,
        loginFailure: true,
        loginRequest: false,
        loginSuccess: false,
      };

    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        credential: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
