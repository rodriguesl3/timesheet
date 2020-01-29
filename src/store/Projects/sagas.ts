import { ProjectTypes, PROJECT_INITIAL_STATE, Projects } from './types';
import { put } from 'redux-saga/effects';
import { projectSuccess, projectFailure } from './action';

export type ProjectSagas = {
  payload: Projects[];
  type: ProjectTypes;
};

export function* loadProjects(action: ProjectSagas): object {
  try {
    console.log('Request Projects => ', action.payload);
    const response: Projects[] = PROJECT_INITIAL_STATE.projects;
    console.log(response);
    yield put(projectSuccess(response));
  } catch (err) {
    console.log('Error to get projets => ', err);
    yield put(projectFailure());
  }
}
