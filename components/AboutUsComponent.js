import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Card, ListItem} from 'react-native-elements';
import { ABOUT_US } from '../shared/aboutUs';

class AboutUs extends Component {
  
    static navigationOptions = {
        title: 'About Us'
    };

    constructor(props){
        super(props);
        this.state= {
            works: ABOUT_US.corporateLeadership
        }
    }

    render() {
       
        const renderMenuItem = ({item,index})=>{
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                />
            );
        };

        return (
            <View>
                <Card title="About Us">
                    <Text style={{ margin: 10 }}>
                        {ABOUT_US.ourHistory}
                    </Text>
                </Card>
                <Card title="Corporate Leadership">
                    <FlatList
                        data={this.state.works}
                        renderItem={renderMenuItem}
                        keyExtractor={item => item.id.toString()} />
                </Card>
            </View>);
    }
}

export default AboutUs;