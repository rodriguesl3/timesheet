import { Reducer } from 'redux';
import { ProjectTypes, ProjectState, PROJECT_INITIAL_STATE, Projects } from './types';

type ProjectActionReducer = {
  type: ProjectTypes;
  payload?: object;
};

const projectReducer: Reducer<ProjectState> = (
  state: ProjectState = PROJECT_INITIAL_STATE,
  action: ProjectActionReducer,
) => {
  switch (action.type) {
    case ProjectTypes.PROJECT_REQUEST:
      return { ...state, success: false, failure: false, loading: true };
    case ProjectTypes.PROJECT_SUCCESS:
      return { ...state, success: true, failure: false, loading: false, projects: action.payload as Projects[] };
    case ProjectTypes.PROJECT_FAILURE:
      return { ...state, success: false, failure: true, loading: false };
    default:
      return state;
  }
};

export default projectReducer;
