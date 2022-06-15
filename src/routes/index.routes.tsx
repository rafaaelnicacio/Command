import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import HomeIcon from '../components/icons/HomeIcom';
import ListIcon from '../components/icons/ListIcon';
import SettingsIcon from '../components/icons/SettingsIcon';
import HomeScreen from '../screens/HomeScreen';
import ListOrders from '../screens/ListOrders';
import Settings from '../screens/Settings';

const Routes: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FEBA27',
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#212121',
          paddingBottom: 5,
          paddingTop: 5
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#FEBA27' : '#ABB6BA'}}>Início</Text>
          ),
          headerShown: false,
          
          tabBarIcon: ({focused}: {color: string; focused: boolean}) => (
            <HomeIcon color={focused ? '#FEBA27' : '#ABB6BA'} />
          ),
        }}
      />
      <Tab.Screen
        name="ListOrders"
        component={ListOrders}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#FEBA27' : '#ABB6BA'}}>
              Lista de Pedidos
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({focused}: {color: string; focused: boolean}) => (
            <ListIcon color={focused ? '#FEBA27' : '#ABB6BA'} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? '#FEBA27' : '#ABB6BA'}}>
              Configuração
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({focused}: {color: string; focused: boolean}) => (
            <SettingsIcon color={focused ? '#FEBA27' : '#ABB6BA'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
