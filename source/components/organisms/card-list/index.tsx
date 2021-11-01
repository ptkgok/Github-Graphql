import Card from '../../../components/molecules/card';
import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

const CardList: React.FC = ({ cards }) => {
  return (
    <SafeAreaView>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ margin: "5%" }} />}
        data={cards}
        renderItem={({ item }) => <Card card={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>

  )
}

export default CardList;