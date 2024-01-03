/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {routes} from 'src/routes';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {routes.map((route, key) => (
        <Stack.Navigator initialRouteName="Home" key={key}>
          <Stack.Screen {...route} options={{headerShown: false}} />
        </Stack.Navigator>
      ))}
    </NavigationContainer>
  );
}
export default App;
