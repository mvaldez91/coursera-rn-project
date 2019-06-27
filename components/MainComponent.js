import React,{Component} from 'react';
import {View, Platform} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';

import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

const Navigator = createStackNavigator({
    Menu: {screen: Menu},
    DishDetail: {screen: DishDetail}
},{
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: {screen: Home}
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const MainNavigator = createDrawerNavigator({
   Home: {
       screen: createAppContainer(HomeNavigator),
       defaultNavigationOptions: {
           title: 'Home',
           drawerLabel: 'Home'
       }
   },
   Menu: {
       screen: createAppContainer(Navigator),
       defaultNavigationOptions: {
           title: 'Menu',
           drawerLabel: 'Menu'
       }
   }
});



export default createAppContainer(MainNavigator);