import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Card} from 'react-native-elements';
import {CONTACT} from '../shared/contact';

class ContactUs extends Component{
    static navigationOptions = {
        title: 'Contact us'
    };
    render(){
        return (
        <View>
              <Card title="Contact Information">
                <Text style={{margin: 10}}>
                    {CONTACT.Address_ln1}
                </Text>
                <Text style={{margin: 10}}>
                    {CONTACT.Address_ln2}
                </Text>
                <Text style={{margin: 10}}>
                    {CONTACT.Phone}
                </Text>
                <Text style={{margin: 10}}>
                    {CONTACT.Fax}
                </Text>
                <Text style={{margin: 10}}>
                    {CONTACT.Email}
                </Text>
            </Card>
        </View>);
    }
}

// const styles = style.create({

// })
export default ContactUs;