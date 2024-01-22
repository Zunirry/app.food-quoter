import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardRecipe} from 'src/components/CardRecipes';
import {FlatList} from 'src/components/FlatList';
import {MasterLayout} from 'src/components/MasterLayout';

interface Dishes {
  name: string;
  icon?: string | any | null;
  soldAveragePerWeek: number;
  earning: number;
}

export const Recipes = ({navigation}: any) => {
  const dishes: Dishes[] = Array(10).fill({
    name: 'Donas',
    icon: null,
    soldAveragePerWeek: 150,
    earning: 100,
  });

  return (
    <MasterLayout>
      <View style={style.wrapper}>
        <FlatList
          data={dishes}
          keyExtractor={({name}, key) => `${name}-${key}`}>
          {(item: Dishes) => <CardRecipe item={item} navigation={navigation} />}
        </FlatList>
      </View>
    </MasterLayout>
  );
};

const style = StyleSheet.create({
  wrapper: {
    marginBottom: '15%',
  },
});

export default Recipes;
