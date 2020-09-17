import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './Source/bottomtab';
import React, { Component } from 'react';
import { View, Text,StyleSheet} from 'react-native';
import Home from './Source/home';
import Login from './Source/login';
import RegisterYourAccount from './Source/register';
import Social from './Source/social';
import Gmail from './Source/gmail';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <View style={styles.home}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name={'Login'} component={BottomTab}/>
      <Stack.Screen name={'Home'} component={Login}/>
      <Stack.Screen name={'Register Now'} component={Login}/>
      <Stack.Screen name={'Register Your Account'} component={RegisterYourAccount}/>
      <Stack.Screen name={'Facebook'} component={Login}/>
      <Stack.Screen name={'Social'} component={Social}/>
      <Stack.Screen name={'Google'} component={Login}/>
      <Stack.Screen name={'Gmail'} component={Gmail}/>

        </Stack.Navigator>
        </NavigationContainer>  
     
    </View>

    );
  }
}

const styles = StyleSheet.create({
  home:{
    flex:1, 
  },
  login: {
    flex:1,
  },
});
