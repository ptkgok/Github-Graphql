import React from 'react';
import { View } from 'react-native';

import * as ButtonStyle from './styles';

interface Props {
  icon?: React.ReactElement | any;
  active?: boolean;
}

const CircularButtonWithIcon: React.FC<Props> = ({ icon, active }) => {
  return (
    <ButtonStyle.Container active={active}>
      {icon}
    </ButtonStyle.Container>
  )
}

export default CircularButtonWithIcon;