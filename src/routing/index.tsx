import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthorizationPage, RegistrationPage } from '../pages';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path='/test2'>
        <Redirect exact to='/test2/authorization' />
      </Route>
      <Route exact path='/test2/authorization' component={AuthorizationPage} />
      <Route exact path='/test2/registration' component={RegistrationPage} />
    </Switch>
  );
};
