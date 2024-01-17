import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'src/components/FlatList';
import {Title} from 'src/components/Title';
import {HexaColor} from 'src/utils/color';

interface TopRecipes {
  name: string;
  costForMe: number;
  priceForUnit: number;
  profits: {
    day: number;
    week: number;
    month: number;
  };
}

export const Home = () => {
  const topRecipes: TopRecipes[] = Array(3).fill({
    name: 'Donas',
    costForMe: 4.5,
    priceForUnit: 15,
    profits: {
      day: 10,
      week: 300,
      month: 1000,
    },
  });

  return (
    // GRADIENT BLUE
    // rgba(0, 167, 214, 1)
    // rgba(0, 138, 255, 1)

    <ImageBackground
      resizeMode="cover"
      source={require('../../assets/icons/background-home.png')}
      style={style.imageBackground}>
      <SafeAreaView style={style.container}>
        <View style={style.header}>
          <Text>MENU</Text>
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

        <FlatList data={topRecipes}>
          {item => (
            <TouchableOpacity style={style.recipes}>
              <View style={style.recipeItem}>
                <Title color={HexaColor.NAVYBLUE} fontSize={22}>
                  {item.name}
                </Title>
                <Title
                  color={HexaColor.SUCCESS}>{`$${item.profits.week}`}</Title>
              </View>
              <View style={style.recipeItem}>
                <Text style={style.recipeCosts}>
                  Costo por {item.name} ${item.costForMe}
                </Text>
                <Text style={style.recipeCosts}>
                  Precio {item.priceForUnit}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </FlatList>
      </SafeAreaView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  buttonMenu: {width: 30, height: 30},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
