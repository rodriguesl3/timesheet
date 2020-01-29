import { EmptyAction, action, PayloadAction } from 'typesafe-actions';
import { ProjectTypes, Projects } from './types';

export const projectRequest = (): EmptyAction<ProjectTypes.PROJECT_REQUEST> => action(ProjectTypes.PROJECT_REQUEST);
export const projectSuccess = (data: Projects[]): PayloadAction<ProjectTypes.PROJECT_SUCCESS, Projects[]> =>
  action(ProjectTypes.PROJECT_SUCCESS, data);
export const projectFailure = (): EmptyAction<ProjectTypes.PROJECT_FAILURE> => action(ProjectTypes.PROJECT_FAILURE);
