import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {icons} from 'src/assets/icons';
import {HexaColor} from 'src/utils/color';

export const Profits = () => {
  return (
    <View style={style.profits}>
      <ImageBackground
        source={icons.squads}
        resizeMode="cover"
        style={style.coverImage}>
        <View style={style.wrapperIconLogo}>
          <Image source={icons.star} style={style.iconLogo} />
        </View>
        <Text style={style.companyName}>Zunirry's Food</Text>
      </ImageBackground>
      <View style={style.statisticsContainer}>
        <View style={style.myRecipes}>
          <Text style={style.tinyTitle}>Mis</Text>
          <Text style={style.title}>RECETAS</Text>
          <Text style={style.bigTitle}>10</Text>
        </View>
        <View style={style.lineSeparator} />
        <View style={style.quoter}>
          <View style={style.quoterTextWrapper}>
            <Text style={style.veryTinyTitle}>TOTAL</Text>
            <Text style={style.smallTitle}>INGREDIENTES</Text>
            <Text style={style.mediumTitle}>$100</Text>
          </View>
          <View style={style.quoter}>
            <View style={style.quoterTextWrapper}>
              <Text style={style.veryTinyTitle}>PROMEDIO DE</Text>
              <Text style={style.smallTitle}>VENTAS</Text>
              <Text style={style.mediumTitle}>$100</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  profits: {
    backgroundColor: HexaColor.WHITE,
    height: 150,
    marginHorizontal: '4%',
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    flex: 1,
    height: '100%',
    borderEndWidth: 1,
    borderColor: HexaColor.GRAY,
    justifyContent: 'center',
    backgroundColor: HexaColor.SOFTGRAY,
    alignItems: 'center',
    borderRadius: 10,
  },
  wrapperIconLogo: {
    width: 80,
    height: 80,
    backgroundColor: HexaColor.SOFTWHITE,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: HexaColor.GRAY,
    alignItems: 'center',
    borderRadius: 50,
  },
  iconLogo: {width: 50, height: 50},
  companyName: {
    fontWeight: 'bold',
    marginTop: 5,
    borderWidth: 2,
    borderColor: HexaColor.GRAY,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: HexaColor.SOFTWHITE,
  },
  statisticsContainer: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    backgroundColor: HexaColor.SOFTGRAY,
    justifyContent: 'space-between',
  },
  myRecipes: {
    flex: 1,
    height: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tinyTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    margin: 0,
    padding: 0,
    lineHeight: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 0,
    padding: 0,
    lineHeight: 15,
  },
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 0,
    padding: 0,
  },
  lineSeparator: {width: '100%', height: 3, backgroundColor: HexaColor.GRAY},
  quoter: {
    flex: 1,
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quoterTextWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  veryTinyTitle: {
    fontWeight: 'bold',
    fontSize: 10,
    margin: 0,
    padding: 0,
    lineHeight: 15,
  },
  smallTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    margin: 0,
    padding: 0,
    lineHeight: 15,
  },
  mediumTitle: {fontSize: 17, fontWeight: 'bold'},
});
