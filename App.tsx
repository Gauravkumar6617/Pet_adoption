// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/component/SplashScreen';
import OnBoarding from './src/screen/onBoarding/OnBoarding';
import Login from './src/screen/Login/Login';
import DrawerNavigator from './src/navigation/DrawerNavigator'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={DrawerNavigator} 
          options={{ headerShown: false }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
