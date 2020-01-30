import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import watchSagas from './configureSaga';
import loginReducer from './Login/reducer';
import sidebarReducer from './Sidebar/reducer';
import projectReducer from './Projects/reducer';
import { LoginState } from './Login/types';
import { SideBarState } from './Sidebar/types';
import { ProjectState } from './Projects/types';
import { StockSymbolsState } from './StockSymbols/types';
import stockSymbolReducer from './StockSymbols/reducer';

export interface BaseState {
  success: boolean;
  loading: boolean;
  failure: boolean;
}

export interface GlobalState {
  loginState: LoginState;
  sidebarState: SideBarState;
  projectState: ProjectState;
  stockSymbolState: StockSymbolsState;
}

const globalState = combineReducers({
  loginState: loginReducer,
  projectState: projectReducer,
  sidebarState: sidebarReducer,
  stockSymbolState: stockSymbolReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
const store = createStore(globalState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchSagas);

export default store;
