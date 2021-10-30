import React from 'react';
import { Text } from 'react-native';
import * as Base from './styles'

const BaseTemplate: React.FC = ({ children }) => {
  return (
    <Base.Container>
      {children}
    </Base.Container>
  )
}

export default BaseTemplate;