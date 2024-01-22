import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {icons} from 'src/assets/icons';
import {Card} from 'src/components/Card';
import {CardRecipe} from 'src/components/CardRecipes';
import {FlatList} from 'src/components/FlatList';
import {Header} from 'src/components/Header';
import {MasterLayout} from 'src/components/MasterLayout';
import {Profits} from 'src/components/Profits';
import {CommonSkeleton, SkeletonCard} from 'src/components/Skeleton';
import {Title} from 'src/components/Title';
import {useRecipeQuery} from 'src/hooks/useRecipes';
import {Recipes} from 'src/types/recipes';
import {HexaColor} from 'src/utils/color';
import {windowsHeight} from 'src/utils/dimension';

const TOP_RECIPES = 3;

export const Home = ({navigation}: any) => {
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
      <Header />
      <Profits />
      <View style={style.topRecipes}>
        <Text style={style.topTitle}>TOP</Text>
        <Text style={style.topSubtitle}>Recetas</Text>
      </View>
      {/**
       * If data hasn't items or data is undefined
       **/}
      {data?.length === 0 || !data ? (
        <Card styles={style.noDataCard}>
          <View style={style.noDataContainer}>
            <Image
              source={icons.noRecipes}
              style={style.noDataImage}
              resizeMode="contain"
            />
            <Title color={HexaColor.SOFTBLACK}>
              No hay recetas que mostrar aun
            </Title>
          </View>
        </Card>
      ) : (
        /**
         * If data  has items or data exists
         **/
        <FlatList
          data={data! as Recipes[]}
          showsVerticalScrollIndicator
          alwaysBounceVertical>
          {item => (
            <CardRecipe
              item={item}
              navigation={navigation}
              styles={style.card}
            />
          )}
        </FlatList>
      )}
    </MasterLayout>
  );
};

const style = StyleSheet.create({
  topRecipes: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  topTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: HexaColor.WARNING,
  },
  topSubtitle: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '600',
    color: HexaColor.WARNING,
  },
  card: {marginVertical: 12, height: 150},
  noDataCard: {
    height: windowsHeight / 3.5,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    backgroundColor: HexaColor.WHITE,
    borderRadius: 20,
  },
  noDataImage: {height: 150, width: 150, marginBottom: 20},
});
