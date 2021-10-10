import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CovidScreen from '../covid-vaccine-screen/CovidScreen';
import VaccineScreen from '../covid-vaccine-screen/VaccineScreen';
import HomeScreen from '../covid-vaccine-screen/HomeScreen';
import TrickcovidScreen from '../covid-vaccine-screen/TrickcovidScreen';
import ChecklistScreen from '../covid-vaccine-screen/Checklist'

const Tab = createBottomTabNavigator();

const MainScreen = ({navigation}) => {

    return (
        <Tab.Navigator
            initialRouteName="Main"
            tabBarOptions={{
                activeTintColor: '#fff',
                activeBackgroundColor: 'blue',
                inactiveBackgroundColor: 'blue',
                labelStyle: {fontSize: 14},
            }}
            
        >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Covid"
        component={CovidScreen}
        options={{
          tabBarLabel: 'Covid',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="virus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Vaccine"
        component={VaccineScreen}
        options={{
          tabBarLabel: 'Vaccine',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="syringe" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trick"
        component={TrickcovidScreen}
        options={{
          tabBarLabel: 'Trick',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Checklist"
        component={ChecklistScreen}
        options={{
          tabBarLabel: 'Checklist',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="check" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default MainScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
