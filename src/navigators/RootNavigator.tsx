import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Splash from '../pages/Splash/Splash';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const RootNavigator = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <View>
      <Text>hello</Text>
      {/* <Stack.Navigator>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
    </View>
  );
};
export default RootNavigator;
