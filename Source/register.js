import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

export default class RegisterYourAccount extends Component{
    render(){
        return(
            <View>
                <Input
                placeholder='Enter your email or phone number'/>
                <Button
                title='Continue'
                /> 
            </View>
        );
    }
}
