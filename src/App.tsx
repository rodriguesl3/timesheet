import React from 'react';
import ErrorBoundary from './container/ErrorBoundary';
import Router from './components/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </Provider>
    </div>
  );
};

export default App;
