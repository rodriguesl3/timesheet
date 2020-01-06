import React from 'react';
import ErrorBoundary from './container/ErrorBoundary';
import Router from './components/AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </div>
  );
};

export default App;
