import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {About, Stock} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';

type BottomTabParamList = {
  About: undefined;
  Stock: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const MainNavigator = () => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <MainNavigation />
    </SafeAreaView>
  );
};

export const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 70, backgroundColor: '#352F44'},
        tabBarLabelStyle: {fontSize: 16, color: '#FAF0E6'},
        tabBarActiveBackgroundColor: '#5C5470',
        headerStyle: {
          backgroundColor: '#352F44',
        },
        headerTintColor: '#FAF0E6',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerTitle: 'О приложении',
          tabBarLabel: 'О приложении',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <Icon name="laptop-outline" size={30} color="#FAF0E6" />
          ),
        }}
      />
      <Tab.Screen
        name="Stock"
        component={Stock}
        options={{
          headerTitle: 'Котировки',
          tabBarLabel: 'Котировки',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <Icon name="stats-chart-outline" size={30} color="#FAF0E6" />
          ),
          tabBarActiveTintColor: '#352F44',
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigation = () => {
  return <MainNavigator />;
};
