import Card from '../../../components/molecules/card';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';

const CardList: React.FC<any> = ({cards}) => {
  return (
    <SafeAreaView>
      <FlatList
        ItemSeparatorComponent={() => <View style={{margin: '5%'}} />}
        data={cards}
        renderItem={({item}) => {
          return item ? <Card card={item} /> : console.log('nenhum usuario');
        }}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
};

export default CardList;
