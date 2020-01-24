import { Reducer } from 'redux';
import { SideBarState, SIDEBAR_INITIAL_STATE, SideBarTypes, SideBar } from './types';

import { EmptyAction, PayloadAction } from 'typesafe-actions';

type SideBarActionReducer = {
  type: SideBarTypes;
  payload?: object;
};

const sideBarReducer: Reducer<SideBarState> = (
  state: SideBarState = SIDEBAR_INITIAL_STATE,
  action: SideBarActionReducer,
) => {
  switch (action.type) {
    case SideBarTypes.SIDEBAR_REQUEST:
      return { ...state, sideBarRequest: true, sideBarSuccess: false, sideBarFailure: false };
    case SideBarTypes.SIDEBAR_FAILURE:
      return { ...state, sideBarFailure: true, sideBarSuccess: false, sideBarRequest: false };
    case SideBarTypes.SIDEBAR_SUCCESS:
      return {
        ...state,
        sideBar: action.payload as SideBar[],
        sideBarRequest: true,
        sideBarFailure: false,
        sideBarSuccess: true,
      };
    default:
      return { ...state };
  }
};

export default sideBarReducer;
