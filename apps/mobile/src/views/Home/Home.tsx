import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'src/components/FlatList';
import {MasterLayout} from 'src/components/MasterLayout';
import {CommonSkeleton, SkeletonCard} from 'src/components/Skeleton';
import {Title} from 'src/components/Title';
import {useRecipeQuery} from 'src/hooks/useRecipes';
import {Recipes} from 'src/types/recipes';
import {HexaColor} from 'src/utils/color';

const TOP_RECIPES = 3;

export const Home = () => {
  const {data, isLoading} = useRecipeQuery(TOP_RECIPES);

  if (isLoading) {
    return (
      <MasterLayout>
        <SkeletonCard />
        <CommonSkeleton />
      </MasterLayout>
    );
  }

  return (
    // GRADIENT BLUE
    // rgba(0, 167, 214, 1)
    // rgba(0, 138, 255, 1)

    <MasterLayout>
      <View style={style.header}>
        <View></View>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={style.buttonMenu}
            source={require('src/assets/icons/menu.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={style.profits}>
        <Text>Profits</Text>
      </View>

      <FlatList data={data! as Recipes[]}>
        {item => (
          <TouchableOpacity style={style.recipes}>
            <View style={style.recipeItem}>
              <Title color={HexaColor.NAVYBLUE} fontSize={22}>
                {item.name}
              </Title>
              <Title color={HexaColor.SUCCESS}>{`$${item.profits.week}`}</Title>
            </View>
            <View style={style.recipeItem}>
              <Text style={style.recipeCosts}>
                Costo por {item.name} ${item.costForMe}
              </Text>
              <Text style={style.recipeCosts}>Precio {item.priceForUnit}</Text>
            </View>
          </TouchableOpacity>
        )}
      </FlatList>
    </MasterLayout>
  );
};

const style = StyleSheet.create({
  buttonMenu: {width: 30, height: 30, tintColor: HexaColor.WHITE},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5%',
  },
  profits: {
    backgroundColor: HexaColor.WHITE,
    height: 150,
    marginHorizontal: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: HexaColor.SHADOW_WHITE,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 3,
  },
  coverImage: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 5,
    position: 'relative',
  },
  recipes: {
    borderRadius: 5,
    margin: '5%',
    height: 100,
    padding: '3%',
    justifyContent: 'space-between',
    backgroundColor: HexaColor.WHITE,
    shadowColor: HexaColor.SHADOW_WHITE,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  recipeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeCosts: {color: '#6c6c6c', fontStyle: 'italic'},
});
