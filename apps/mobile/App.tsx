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

import {QueryClientProvider} from 'react-query';
import {queryClient} from './queryClient';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          {routes.map((route, key) => (
            <Stack.Screen {...route} options={{headerShown: false}} key={key} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
export default App;
