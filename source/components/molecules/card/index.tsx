import { GridColumn, GridRow, Row } from '../../../components/templates/grids';
import { Title } from '../../../components/theme/fonts.theme';
import React, { useContext, useEffect } from 'react';
import { Image, RefreshControl, Text, View } from 'react-native';

import * as CardStyle from './styles';
import { useNavigation } from '@react-navigation/core';
import CircularButtonWithIcon from '../../../components/atoms/circular-button-icon';
import { DeleteIcon, PlaceIcon, StarGreyIcon, BusinessIcon } from '../../../assets/icons';
import Avatar from '../../../components/atoms/avatar';
import { InitRealm } from '../../../infra/realm';
import { AuthenticatedContext } from '../../../infra/context/authenticated';

interface CardProps {
  card: {
    login?: string;
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

  const { setUser } = useContext(AuthenticatedContext)

  const Delete = async () => {
    const realm = await InitRealm()
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey('User', card.id));
    });
    navigation.reset({ routes: [{ name: 'Home' }] });
  }

  return (
    <CardStyle.Container onPress={() => navigation.navigate('RepositoriesOfUsers', { login: card.login })} >
      <Row align="center" justify="space-between" >
        <Avatar width={64} height={64} uri={`${card?.avatarUrl}`} />
        <GridColumn width="65%" style={{ marginLeft: 16, flex: 1 }}>
          <CardStyle.Name>{card?.name || "Sem nome"}</CardStyle.Name>
          <Text>@{card?.login}</Text>
        </GridColumn>
        <CircularButtonWithIcon onPress={Delete} icon={<Image source={DeleteIcon} />} />
      </Row>
      <Row>
        <GridRow justify="flex-start">
          <Row align="center" justify="flex-start" style={{ marginRight: 16, flex: 1 }}>
            <Image source={BusinessIcon} />
            <CardStyle.Informations numberOfLines={1}>{card?.company}</CardStyle.Informations>
          </Row>
          <Row align="center" justify="flex-start" style={{ marginRight: 16, flex: 1 }}>
            <Image source={PlaceIcon} />
            <CardStyle.Informations numberOfLines={1}>{card?.location || "nenhum"}</CardStyle.Informations>
          </Row>
          <Row align="center" justify="flex-start" style={{ marginRight: 16, flex: 1 }}>
            <Image source={StarGreyIcon} />
            <CardStyle.Informations numberOfLines={1}>{card?.starredRepositories?.totalCount || 0}</CardStyle.Informations>
          </Row>
        </GridRow>
      </Row>
    </CardStyle.Container>
  )
}

export default Card;