import {createStackNavigator, 
        createAppContainer, 
        createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import ContactUs from './ContactUsComponent';


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

const AboutUsNavigator = createStackNavigator({
    AboutUs: {screen: AboutUs}
},{
    initialRouteName: 'AboutUs',
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

const ContactUsNavigator = createStackNavigator({
    ContactUs: {screen: ContactUs}
},{
    initialRouteName: 'ContactUs',
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
   },
   AboutUs: {
    screen: createAppContainer(AboutUsNavigator),
    defaultNavigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us'
    }
   },
    ContactUs: {
        screen: createAppContainer(ContactUsNavigator),
        defaultNavigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us'
        }
    }
});



export default createAppContainer(MainNavigator);