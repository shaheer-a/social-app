import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class MainScreen extends Component{
    render(){
        return(
            <View>
                <Text>Main Screen</Text>
            </View>
        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});