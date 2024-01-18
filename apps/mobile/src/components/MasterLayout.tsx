import React, {ReactNode} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

interface Layout {
  children: ReactNode;
}

export const MasterLayout = (props: Layout) => {
  const {children} = props;
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('src/assets/icons/background-home.png')}
      style={style.imageBackground}>
      <SafeAreaView style={style.container}>{children}</SafeAreaView>
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
});
