import { GridColumn, GridRow } from '../../../components/templates/grids';
import { Title } from '../../../components/theme/fonts.theme';
import React from 'react';
import { Image, Text, View } from 'react-native';

import * as CardStyle from './styles';
import { useNavigation } from '@react-navigation/core';

interface CardProps {
  card: {
    username?: string;
    avatar?: string;
    name?: string;
  }
}

const Card: React.FC<CardProps> = ({ card }) => {

  const navigation = useNavigation()

  return (
    <CardStyle.Container onPress={() => navigation.navigate('RepositoriesOfUsers', {
      login: card.username
    })} >
      <GridRow align="center">
        <Image source={{ uri: "https://www.g20.org/wp-content/uploads/2021/01/people.jpg" }} style={{ width: 30, height: 30, marginRight: 5 }} />
        <GridColumn>
          <Title>{card?.name || "Jhon Doe Santos"}</Title>
          <Text>{card?.username || "@jhondoesantos"}</Text>
        </GridColumn>
      </GridRow>
    </CardStyle.Container>
  )
}

export default Card;