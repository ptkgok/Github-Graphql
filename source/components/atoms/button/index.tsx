import React from 'react';
import * as S from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container  {...rest}>
      <S.Title>{children}</S.Title>
    </S.Container>
  )
}

export default Button;