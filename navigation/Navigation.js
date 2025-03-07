import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';  // Import FontAwesome

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'; // FontAwesome icon for home
          } else if (route.name === 'Profile') {
            iconName = 'user'; // FontAwesome icon for profile
          }
          return <FontAwesome name={iconName} size={size} color={color} />;  // Use FontAwesome here
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
