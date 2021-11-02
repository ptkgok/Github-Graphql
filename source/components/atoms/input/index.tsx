import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import { AvatarIcon } from '../../../assets/icons';

const Input: React.FC = ({ ...rest }) => {
  return (
    <S.Container>
      <S.Avatar>
        <Image source={AvatarIcon} width={24} height={24} />
      </S.Avatar>
      <S.Field {...rest} />
    </S.Container>
  )
}

export default Input;