import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Groups,
  Cars,
  Students,
  Instructors,
  SignInPage,
  SignUpPage,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect exact to='/groups' />
      </Route>
      <Route exact path='/authorization' component={SignInPage} />
      <Route exact path='/registration' component={SignUpPage} />

      <PrivateRoute exact path='/groups' component={Groups} />
      <PrivateRoute exact path='/cars' component={Cars} />
      <PrivateRoute exact path='/students' component={Students} />
      <PrivateRoute exact path='/instructors' component={Instructors} />
    </Switch>
  );
};
