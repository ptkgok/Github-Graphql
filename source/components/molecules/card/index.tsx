import { GridColumn, GridRow, Row } from '../../../components/templates/grids';
import { Title } from '../../../components/theme/fonts.theme';
import React from 'react';
import { Image, Text, View } from 'react-native';

import * as CardStyle from './styles';
import { useNavigation } from '@react-navigation/core';
import CircularButtonWithIcon from '../../../components/atoms/circular-button-icon';
import { DeleteIcon, PlaceIcon, StarGreyIcon, BusinessIcon } from '../../../assets/icons';
import Avatar from '../../../components/atoms/avatar';

interface CardProps {
  card: {
    username?: string;
    avatarUrl?: string;
    name?: string;
    company?: string;
    place?: string;
    location?: string;
    starredRepositories?: {
      totalCount?: number;
    }
  }
}

const Card: React.FC<CardProps> = ({ card }) => {
  const navigation = useNavigation()

  return (
    <CardStyle.Container onPress={() => navigation.navigate('RepositoriesOfUsers', { login: card.username })} >
      <Row align="center" justify="space-between" >
        <Avatar width={64} height={64} uri={`${card?.avatarUrl}`} />
        <GridColumn width="65%" style={{ marginLeft: 16 }}>
          <CardStyle.Name>{card?.name || "Jhon Doe Santos"}</CardStyle.Name>
          <Text>@{card?.username || "jhondoesantos"}</Text>
        </GridColumn>
        <CircularButtonWithIcon icon={<Image source={DeleteIcon} />} />
      </Row>
      <Row>
        <GridRow justify="flex-start">
          <Row align="center" style={{ marginRight: 16 }}>
            <Image source={BusinessIcon} />
            <CardStyle.Informations>{card?.company}</CardStyle.Informations>
          </Row>
          <Row align="center" style={{ marginRight: 16 }}>
            <Image source={PlaceIcon} />
            <CardStyle.Informations>{card?.location}</CardStyle.Informations>
          </Row>
          <Row align="center" style={{ marginRight: 16 }}>
            <Image source={StarGreyIcon} />
            <CardStyle.Informations>{card?.starredRepositories?.totalCount}</CardStyle.Informations>
          </Row>
        </GridRow>
      </Row>
    </CardStyle.Container>
  )
}

export default Card;