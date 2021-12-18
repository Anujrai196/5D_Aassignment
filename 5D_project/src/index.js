import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './view/HomePage';
import DetailScreen from './view/DetailScreen';
import Favourites from './view/Favourites';
import Search from './view/Search';

const Stack = createNativeStackNavigator()

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen
        options={{headerShown: false}}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
       options={{headerShown: false}}
        name="DetailScreen"
        component={DetailScreen}
      />
      <Stack.Screen
       options={{headerShown: false}}
        name="Favourites"
        component={Favourites}
      />
      <Stack.Screen
       options={{headerShown: false}}
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;