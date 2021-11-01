import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input: React.FC = ({ ...rest }) => {
  return (
    <S.Container>
      <S.Avatar />
      <S.Field {...rest} />
    </S.Container>
  )
}

export default Input;