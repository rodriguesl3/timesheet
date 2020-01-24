export enum SideBarTypes {
  SIDEBAR_REQUEST = 'SIDEBAR_REQUEST',
  SIDEBAR_SUCCESS = 'SIDEBAR_SUCCESS',
  SIDEBAR_FAILURE = 'SIDEBAR_FAILURE',
}

export interface SideBar {
  id: string;
  name: string;
  icon: string[];
  description: string;
  path: string;
}

export interface SideBarState {
  sideBar?: SideBar[];
  sideBarSuccess: boolean;
  sideBarFailure: boolean;
  sideBarRequest: boolean;
}

export const SIDEBAR_INITIAL_STATE: SideBarState = {
  sideBar: [
    {
      id: '1',
      description: 'open details of your account',
      icon: ['fab', 'apple'],
      name: 'account',
      path: '/account',
    },
    {
      id: '2',
      description: 'open history of your timesheet',
      icon: ['fab', 'microsoft'],
      name: 'history',
      path: '/history',
    },
    {
      id: '3',
      description: 'open your projects that you are working on',
      icon: ['fab', 'google'],
      name: 'projects',
      path: '/projects',
    },
  ],
  sideBarFailure: false,
  sideBarRequest: false,
  sideBarSuccess: true,
};
