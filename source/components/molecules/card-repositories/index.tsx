import { GridRow, GridColumn } from '../../../components/templates/grids';
import { Description, Title } from '../../../components/theme/fonts.theme';
import React from 'react';

import * as CardStyle from './styles';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const CardRepositories: React.FC = ({ infos }) => {

  const tags = [{
    id: 1,
    name: 'TypeScript',
  },
  {
    id: 2,
    name: 'React',
  },
  ]

  return (
    <CardStyle.Container>
      <GridRow justify="space-between">
        <CardStyle.Title>{infos.name} > </CardStyle.Title>
        <Text>{"<>"}</Text>
      </GridRow>
      <GridColumn>
        <CardStyle.Description>{infos.description}</CardStyle.Description>
        <GridRow>
          {tags.map((tag) => (
            <CardStyle.Tags key={tag.id}><Text style={{ fontSize: 11 }}>{tag.name}</Text></CardStyle.Tags>
          ))}
        </GridRow>
      </GridColumn>
      <GridRow justify="space-between">
        <Text>{infos.primaryLanguage && infos.primaryLanguage.name}</Text>
        <Text>{infos.stargazerCount}</Text>
        <Text>{infos.updatedAt}</Text>
      </GridRow>
    </CardStyle.Container>
  )
}

export default CardRepositories;