import React, {Component} from 'react';
import {FlatList,View,Platform} from 'react-native';
import {ListItem} from 'react-native-elements';
import {DISHES} from "../shared/dishes";

class Menu extends Component {
    static navigationOptions = {
        title: 'Menu'
    };

    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: 0
        };

    }


    render(){
        const {navigate} = this.props.navigation;
        const renderMenuItem = ({item,index})=>{
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={()=> navigate('DishDetail', {dishId: item.id})}
                    leftAvatar={{source: require('../images/uthappizza.png')}}
                />
            );
        };
        return (
            <View style={{flex: 1, paddingTop: Platform.OS ==='ios' ? 0: Expo.Constants.statusBarHeight}}>
                <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item=> item.id.toString()}/>
            </View>);
    }

}

export default Menu;