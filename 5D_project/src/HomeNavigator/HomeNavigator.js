import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomePage from '../HomePage/HomePage';
import SignIn from '../SignIn/SignIn';
import Page1 from '../HomePage/Page1';



const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: true,
        headerStatusBarHeight:
          navigation.dangerouslyGetState().routes.indexOf(route) > 0
            ? 0
            : undefined,
        ...TransitionPresets.SlideFromRightIOS,
      })}
      mode="modal"
    >

      <Stack.Screen name="HomePage" component={HomePage} />
  

    </Stack.Navigator>
  )
}
export default HomeNavigator;