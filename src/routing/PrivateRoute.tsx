import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

type TPrivateRouteProps = {
  component: FC;
  path: string;
  exact?: boolean;
};

export const PrivateRoute: FC<TPrivateRouteProps> = ({
  // eslint-disable-next-line react/prop-types
  component,
  ...rest
}) => {
  const isAuth = false;

  return isAuth ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect to='/test2/authorization' />
  );
};
