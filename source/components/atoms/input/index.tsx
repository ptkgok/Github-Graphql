import { GridRow } from '../../../components/templates/grids';
import React from 'react';
import { Image, Text, View, } from 'react-native';
import * as S from './styles';

const Input: React.FC = ({ ...rest }) => {
  return (
    <S.Container>
      <S.Avatar />
      <S.Field {...rest} />
    </S.Container>
  )
}

export default Input;