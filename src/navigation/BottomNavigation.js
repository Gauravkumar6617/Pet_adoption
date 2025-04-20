import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screen/HomeScreen/HomeScreen';
import Explore from '../screen/HomeScreen/Explore/Explore';
import Profile from '../screen/HomeScreen/Profile/Profile';

import Add_Pet from '../screen/HomeScreen/Add_Pet/Add_Pet';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home-outline';
          if (route.name === 'Explore') iconName = 'search-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          else if (route.name === 'Favorite') iconName = 'heart-outline';
          else if (route.name === 'Add Pet') iconName = 'add-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      
  
      <Tab.Screen name="Add Pet" component={Add_Pet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
