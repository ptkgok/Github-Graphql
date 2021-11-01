import React, { useContext } from 'react';
import { AuthenticatedContext } from '../infra/context/authenticated';
import AuthenticatedRoutes from './auth.routes';
import UnauthenticatedRoutes from './unauth.routes';

const Routes: React.FC = () => {
  const { authenticated, user } = useContext(AuthenticatedContext)

  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />
}

export default Routes;