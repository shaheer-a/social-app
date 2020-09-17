import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

export default class Social extends Component{
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
                    Log in to your Facebook account to connect to Tinder
                </Text>
                <View>
                <Input
                placeholder='Mobile number or email address'/>
                <Input
                placeholder='Facebook password'/>
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
