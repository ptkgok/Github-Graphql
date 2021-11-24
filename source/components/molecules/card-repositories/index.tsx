import {GridRow, GridColumn, Row} from '../../../components/templates/grids';
import moment from 'moment';
import React from 'react';
import * as CardStyle from './styles';
import {Image, Text, View} from 'react-native';
import {tags} from '../../../utils/tags';
import {
  AccessTimeIcon,
  EditIcon,
  KeyboardArrowRightIcon,
  LanguageIcon,
  StarGreyIcon,
  StarYellowIcon,
  SupervisorAccount,
} from '../../../assets/icons';
import CircularButtonWithIcon from '../../../components/atoms/circular-button-icon';

interface Props {
  infos: {
    name: string;
    description: string;
    primaryLanguage: string;
    stargazerCount: number;
    updatedAt: string | Date;
  };
}

const CardRepositories: React.FC<Props> = ({infos}) => {
  let lastUpdate = moment(
    new Date(infos.updatedAt).toLocaleString('pt-BR').split(' '),
    'D/M/YYYY',
  );
  let nowTime = moment(
    new Date().toLocaleString('pt-BR').split(' '),
    'D/M/YYYY',
  );
  let diffDays = nowTime.diff(lastUpdate, 'days');

  return (
    <CardStyle.Container>
      <GridRow justify="space-between">
        <CardStyle.Title>
          {infos.name}
          <View style={{width: 10}} />
          <Image source={KeyboardArrowRightIcon} />
        </CardStyle.Title>
        <CircularButtonWithIcon
          active={true}
          icon={<Image source={StarYellowIcon} />}
        />
      </GridRow>
      <GridColumn>
        <CardStyle.Description>{infos.description}</CardStyle.Description>
        <GridRow justify="flex-start">
          {tags.map(tag => (
            <CardStyle.Tags key={tag.id}>
              <Text style={{fontSize: 11}}>{tag.name}</Text>
            </CardStyle.Tags>
          ))}
          <CircularButtonWithIcon
            active={true}
            icon={<Image source={EditIcon} />}
          />
        </GridRow>
      </GridColumn>
      <GridRow justify="space-between">
        <Row align="center">
          <Image source={LanguageIcon} />
          <CardStyle.Informations>
            {infos.primaryLanguage ? infos.primaryLanguage.name : 'Void'}
          </CardStyle.Informations>
        </Row>
        <Row align="center">
          <Image source={StarGreyIcon} />
          <CardStyle.Informations>
            {infos.stargazerCount}
          </CardStyle.Informations>
        </Row>
        <Row align="center">
          <Image source={SupervisorAccount} />
          <CardStyle.Informations>0</CardStyle.Informations>
        </Row>
        <Row align="center">
          <Image source={AccessTimeIcon} />
          <CardStyle.Informations>{diffDays} dias atrás</CardStyle.Informations>
        </Row>
      </GridRow>
    </CardStyle.Container>
  );
};

export default CardRepositories;
