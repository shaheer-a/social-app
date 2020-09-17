import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

export default class Gmail extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Icon
                name='tinder'
                type='fontisto'
                color='red'
                size={50}
                />
                <Text style={{textAlign: 'center'}}>
                    Log in to your Gmail account to use Tinder
                </Text>
                <View>
                <Input
                placeholder='Enter your Gmail'/>
                <Input
                placeholder='Password'/>
                </View>
                <View style={{flex:0.2}}>
                <Button
                title='Log in'
                />
                </View>
                <View>
                <Button
                title='Not now'
                color='white'
                />
                </View>  
            </View>
        );
    }
}
