import React, { FC } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import LoginForm from '../pages/LoginForm';
import Main from '../pages/Main';

//TODO: improve this file using React Suspense.
//https://itnext.io/async-react-using-react-router-suspense-a86ade1176dc
const AppRouter: FC = () => {
  return (
    <Router basename="/timesheet">
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/" exact component={LoginForm} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
