import React from 'react';
import ErrorBoundary from './container/ErrorBoundary';
import Router from './components/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

import { ThemeProvider, darkTheme, lightTheme } from 'bold-ui';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
        <ErrorBoundary>
          <ThemeProvider theme={lightTheme}>
            <nav>THis is a navbar</nav>
            <Router />
          </ThemeProvider>
        </ErrorBoundary>
      </Provider>
    </div>
  );
};

export default App;
