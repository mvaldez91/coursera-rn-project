import React,{Component} from 'react';
import {View, Platform} from 'react-native';
import {createStackNavigator, createAppContainer } from 'react-navigation';

import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

const MainNavigator = createStackNavigator({
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

const Main = createAppContainer(MainNavigator);


export default Main;