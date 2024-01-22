import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Card {
  children: React.JSX.Element | any;
  styles?: StyleProp<ViewStyle>;
}

export const Card = ({children, styles}: Card) => {
  return <View style={[style.container, styles]}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    overflow: 'hidden',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 7,
    // borderColor: 'black', // Puedes personalizar el color de la línea diagonal
    // borderWidth: 1,
  },
});
