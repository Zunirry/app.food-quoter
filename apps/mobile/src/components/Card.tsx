import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Card {
  children: React.JSX.Element | any;
}

export const Card = ({children}: Card) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
