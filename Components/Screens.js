import React from 'react';
import { Button, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import DashboardScreen from './DashboardScreen';
import MapDetail from './MapDetail';
import MapsScreen from './MapsScreen'
import MapImageTabView from './MapImageTabView';


const DashboardStack = StackNavigator({
  Dashboard: { screen: DashboardScreen },
  Details: { screen: MapImageTabView },
});

const MapsStack = StackNavigator({
  Maps: { screen: MapsScreen },
  Details: { screen: MapImageTabView },
});

export default TabNavigator(
  {
    Dashboard: { screen: DashboardStack },
   // Maps: { screen: MapsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Dashboard') {
          iconName = `logo-dribbble${focused ? '' : '-outline'}`;
        } else if (routeName === 'Maps') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
