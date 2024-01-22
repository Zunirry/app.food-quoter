import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {icons} from 'src/assets/icons';
import {HexaColor} from 'src/utils/color';

export const Header = () => {
  return (
    <View style={style.header}>
      <View></View>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          style={style.buttonMenu}
          source={icons.menu}
        />
      </TouchableOpacity>
    </View>
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
});
