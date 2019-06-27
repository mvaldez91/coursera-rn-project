import React, {Component} from 'react';
import {FlatList,View,Platform,Text} from 'react-native';

class Home extends Component{
    static navigationOptions = {
        title: 'Home'
    };
    render(){
        return (
        <View>
            <Text>Home Component</Text>
        </View>);
    }
}

export default Home;