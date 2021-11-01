import React from 'react';
import HomeScreen from '../screens/home';
import AddUserScreen from '../screens/add-new-user';
import { HeaderTheme } from '../components/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RepositoriesOfUsers from '../screens/repositories-of-user';

const AuthenticatedStack = createNativeStackNavigator()

const AuthenticatedRoutes: React.FC = () => {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen name="Home"
        component={HomeScreen}
        options={HeaderTheme}
      />
      <AuthenticatedStack.Screen name="AddUser" component={AddUserScreen} />
      <AuthenticatedStack.Screen name="RepositoriesOfUsers" component={RepositoriesOfUsers} />
    </AuthenticatedStack.Navigator>
  )
}

export default AuthenticatedRoutes;