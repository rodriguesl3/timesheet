import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Router from './components/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

import { ThemeProvider, darkTheme, lightTheme } from 'bold-ui';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
        <ErrorBoundary>
          <ThemeProvider theme={lightTheme}>
            {/* <Navbar /> */}
            <Router />
          </ThemeProvider>
        </ErrorBoundary>
      </Provider>
    </div>
  );
};

export default App;
