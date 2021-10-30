import React from 'react';
import { Text } from 'react-native';
import * as LoginStyle from './styles'

const LoginTemplate: React.FC = ({ children }) => {
  return (
    <LoginStyle.Container>
      {children}
    </LoginStyle.Container>
  )
}

export default LoginTemplate;