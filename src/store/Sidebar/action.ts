import { action, EmptyAction, PayloadAction } from 'typesafe-actions';
import { SideBarTypes, SideBar } from './types';

export const sideBarRequest = (): EmptyAction<SideBarTypes.SIDEBAR_REQUEST> => action(SideBarTypes.SIDEBAR_REQUEST);
export const sideBarSuccess = (sideBars: SideBar[]): PayloadAction<SideBarTypes.SIDEBAR_SUCCESS, SideBar[]> =>
  action(SideBarTypes.SIDEBAR_SUCCESS, sideBars);
export const sideBarFailure = (): EmptyAction<SideBarTypes.SIDEBAR_FAILURE> => action(SideBarTypes.SIDEBAR_FAILURE);
