import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={HomeScreen}
                options={{ 
                    headerShown: false, 
                    tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='detalles'
                component={DetailsScreen}
                options={{ 
                    headerShown: false,
                    tabBarIcon: () => <Ionicons name="settings" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation