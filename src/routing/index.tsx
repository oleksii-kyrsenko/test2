import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  AuthorizationPage,
  RegistrationPage,
  Groups,
  Cars,
  Students,
  Instructors,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path='/test2'>
        <Redirect exact to='/test2/groups' />
      </Route>
      <Route exact path='/test2/authorization' component={AuthorizationPage} />
      <Route exact path='/test2/registration' component={RegistrationPage} />

      <PrivateRoute exact path='/test2/groups' component={Groups} />
      <PrivateRoute exact path='/test2/cars' component={Cars} />
      <PrivateRoute exact path='/test2/students' component={Students} />
      <PrivateRoute exact path='/test2/instructors' component={Instructors} />
    </Switch>
  );
};
