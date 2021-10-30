
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/login';


const UnauthenticatedStack = createNativeStackNavigator()

const UnauthenticatedRoutes: React.FC = () => {
  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Screen name="Login" component={LoginScreen} />
    </UnauthenticatedStack.Navigator>
  )
}

export default UnauthenticatedRoutes;