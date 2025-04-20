// src/navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTab from './BottomNavigation';
import Favorite from '../screen/HomeScreen/Favorite/Favortie';
import Add_Pet from '../screen/HomeScreen/Add_Pet/Add_Pet';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    initialRouteName="Main"
    screenOptions={{
     
      headerStyle: {
       
        elevation: 0, // removes shadow on Android
        shadowOpacity: 0, // removes shadow on iOS
      },
   
    }}
  >
  
      <Drawer.Screen name="Main" component={BottomTab} options={{ title: 'Home' }} />

      {/* Extra drawer screens */}
      <Drawer.Screen name="Favorite" component={Favorite} />
      <Drawer.Screen name="Add Pet" component={Add_Pet} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
