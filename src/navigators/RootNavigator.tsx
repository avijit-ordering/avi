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

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const RootNavigator = () => {
  

  return (
    <View>
      <Text>kol</Text>
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
    </View>
  );
};
export default RootNavigator;
