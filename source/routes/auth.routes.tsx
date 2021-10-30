import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/home';

const AuthenticatedStack = createNativeStackNavigator()

const AuthenticatedRoutes: React.FC = () => {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen name="Home" component={HomeScreen} />
    </AuthenticatedStack.Navigator>
  )
}

export default AuthenticatedRoutes;