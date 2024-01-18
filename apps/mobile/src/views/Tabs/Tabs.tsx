/* eslint-disable react/no-unstable-nested-components */
import {
  BottomTabBarButtonProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {icons} from 'src/assets/icons';
import {HexaColor} from 'src/utils/color';
import Home from '../Home';
import Recipes from '../Recipes';

const Tab = createBottomTabNavigator();

interface CommonImage {
  name?: string;
  imageSrc: string;
  focus: boolean;
}

const CustomTabBarButton = ({children, onPress}: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[style.customTabButtonPosition, style.shadow]}>
    <View style={style.customButtonTab}>{children}</View>
  </TouchableOpacity>
);

export const CommonImage = ({focus, imageSrc}: CommonImage) => {
  const style = StyleSheet.create({
    commonImageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: focus ? 'rgba(0, 138, 255, 1)' : HexaColor.WHITE,
      borderRadius: 30,
      padding: focus ? 5 : 0,
    },
    commonImageBox: {
      backgroundColor: HexaColor.WHITE,
      borderRadius: 30,
      padding: focus ? 10 : 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    commonImage: {
      width: 25,
      height: 25,
      tintColor: focus ? HexaColor.NAVYBLUE : HexaColor.PRIMARY,
    },
  });

  return (
    <View style={style.commonImageContainer}>
      <View style={style.commonImageBox}>
        <Image
          resizeMode="contain"
          source={imageSrc || require('src/assets/icons/home.png')}
          // src={require('src/assets/icons/arrow_up.png')}
          style={style.commonImage}
        />
      </View>
    </View>
  );
};

export const CommonTab = (props: BottomTabBarButtonProps) => {
  const {children, accessibilityState, onPress} = props;

  // Boolean prop for know if a tab was selected
  const isSelected = accessibilityState?.selected;

  if (isSelected) {
    return (
      <View style={style.commonTabContainer}>
        <TouchableOpacity onPress={onPress} style={style.commonTabFlyButton}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={style.commonUnselectedTab}>
        {children}
      </TouchableOpacity>
    );
  }
};

export const Tabs = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 30,
      left: 13,
      right: 13,
      backgroundColor: HexaColor.WHITE,
      borderRadius: 15,
      height: 70,
      ...style.shadow,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <CommonImage name="Home" focus={focused} imageSrc={icons.home} />
          ),
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <CommonTab {...props} />
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Create"
        component={Recipes}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.plus}
              resizeMode="contain"
              style={style.customButtonImage}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          tabBarIcon: ({focused}) => (
            <CommonImage
              name="Recipes"
              focus={focused}
              imageSrc={icons.recipe}
            />
          ),
          tabBarButton: props => <CommonTab {...props} />,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: HexaColor.SHADOW_WHITE,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  customButtonTab: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e32f45',
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
  },
  customTabButtonPosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    tintColor: HexaColor.WHITE,
  },
  commonTabContainer: {
    flex: 1,
    alignItems: 'center',
  },
  commonTabFlyButton: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000000',
  },
  commonUnselectedTab: {
    flex: 1,
    position: 'relative',
    backgroundColor: HexaColor.WHITE,
    alignItems: 'center',
    borderRadius: 15,
    height: 60,
  },
});
