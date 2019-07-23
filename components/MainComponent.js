import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    DrawerItems,
    SafeAreaView
} from 'react-navigation';

import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import ContactUs from './ContactUsComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import React from 'react';

const Navigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (<Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />)
        })
    },
    DishDetail: { screen: DishDetail }
}, {
        initialRouteName: 'Menu',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    });

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
}, {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />
        })
    });

const AboutUsNavigator = createStackNavigator({
    AboutUs: { screen: AboutUs }
}, {
        initialRouteName: 'AboutUs',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />
        })
    });

const ContactUsNavigator = createStackNavigator({
    ContactUs: { screen: ContactUs }
}, {
        initialRouteName: 'ContactUs',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name="menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />

        })
    });


const CustomDrawerContentComponent = (props)=>(
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{top: 'always', horizontal:'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('../images/logo.png')} style={styles.drawerImage}></Image>
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>
                        Ristorante con Fusion
                    </Text>
                </View>
            </View>
            <DrawerItems {...props}></DrawerItems>
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: createAppContainer(HomeNavigator),
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon name="home" type="font-awesome" size={24} color={tintColor} />
            )
        }
    },
    Menu: {
        screen: createAppContainer(Navigator),
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor }) => (
                <Icon name="list" type="font-awesome" size={24} color={tintColor} />
            )
        }
    },
    AboutUs: {
        screen: createAppContainer(AboutUsNavigator),
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor }) => (
                <Icon name="info-circle" type="font-awesome" size={24} color={tintColor} />
            )
        }
    },
    ContactUs: {
        screen: createAppContainer(ContactUsNavigator),
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor }) => (
                <Icon name="address-card" type="font-awesome" size={22} color={tintColor} />
            )
        }
    }, 
},
{
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});


export default createAppContainer(MainNavigator);