import React from 'react';
import * as S from './styles';

const Button: React.FC = ({ children, ...rest }) => {
  return (
    <S.Container  {...rest}>
      <S.Title>{children}</S.Title>
    </S.Container>
  )
}

export default Button;