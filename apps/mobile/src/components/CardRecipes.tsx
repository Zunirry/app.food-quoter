import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {icons} from 'src/assets/icons';
import {images} from 'src/assets/images';
import {Recipes} from 'src/types/recipes';
import {HexaColor} from 'src/utils/color';
import {Card} from './Card';
import {Title} from './Title';

interface CardRecipes<T> {
  item: T | Recipes | any;
  styles?: StyleProp<ViewStyle>;
  navigation: any;
}

export const CardRecipe = <T,>({item, styles, navigation}: CardRecipes<T>) => {
  console.log('item: ', item);
  return (
    <View style={[style.flatItem, styles]}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Card>
          <View style={style.bodyWrapper}>
            <View style={style.favorites}>
              <TouchableOpacity>
                <Image source={icons.star} style={style.favoriteIcon} />
              </TouchableOpacity>
            </View>
            <View style={style.infoContainer}>
              <View style={style.infoTitle}>
                <Title color={HexaColor.NAVYBLUE}>{item.name}</Title>
              </View>
              <View style={style.infoContent}>
                <View style={style.earningWrapper}>
                  <Text style={style.statistics}>Ganancias</Text>
                  <View style={style.statisticsWrapper}>
                    <Text style={style.statistics}>{item.earning}</Text>
                    <Image
                      style={style.arrowStatistics}
                      source={icons.arrowUp}
                    />
                  </View>
                </View>
                <View style={style.soldPerWeeksWrapper}>
                  <Text style={style.statistics}>Semanal</Text>
                  <View style={style.statisticsWrapper}>
                    <Text style={style.statistics}>
                      {item.soldAveragePerWeek}
                    </Text>
                    <Image
                      style={style.arrowStatistics}
                      source={icons.arrowDown}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Image
              source={images.coverCard}
              style={style.infoRecipeImage}
              resizeMode="contain"
            />
            <View style={style.infoCoverContainer}>
              <Image
                resizeMode="cover"
                style={style.infoCoverImage}
                source={images.donas}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  flatItem: {
    marginHorizontal: 15,
    marginVertical: 16,
    height: 160,
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: HexaColor.SOFTBLACK,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.65,
    shadowRadius: 5,
    elevation: 12,
  },
  bodyWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 20,
  },
  favorites: {
    position: 'absolute',
    top: 15,
    right: 15,
    flex: 1,
    zIndex: 2,
    borderRadius: 20,
  },
  favoriteIcon: {width: 25, height: 25},
  infoContainer: {
    position: 'absolute',
    right: 8,
    top: 60,
    zIndex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 0,
    margin: 0,
    flex: 1,
    width: '90%',
    height: '60%',
    borderRadius: 20,
  },
  infoTitle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: '60%',
    width: '55%',
    flex: 1,
    borderRadius: 20,
  },
  infoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
    height: '60%',
  },
  infoRecipeImage: {
    zIndex: 1,
    position: 'absolute',
    height: 1000,
    right: -230,
  },
  infoCoverContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  infoCoverImage: {height: '100%', width: '100%'},
  earningWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  soldPerWeeksWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statistics: {
    color: HexaColor.PRIMARY,
    fontWeight: '500',
    fontSize: 16,
  },
  statisticsWrapper: {flexDirection: 'row', alignItems: 'center'},
  arrowStatistics: {width: 17, height: 17},
});
