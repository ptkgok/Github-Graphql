import React from 'react';

import * as ButtonStyle from './styles';

export interface Props {
  icon?: React.ReactElement | any;
  active?: boolean;
  color?: string;
}

const CircularButtonWithIcon: React.FC<Props> = ({icon, active, ...rest}) => {
  return (
    <ButtonStyle.Container active={active} {...rest}>
      {icon}
    </ButtonStyle.Container>
  );
};

export default CircularButtonWithIcon;
