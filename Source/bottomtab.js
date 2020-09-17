import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon, Header, Image} from 'react-native-elements';
import Home from './home';
import Search from './search';
import Add from './Add';
import Liked from './Liked';
import Profile from './profile';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab(){
    return(        
<Tab.Navigator
initialRouteName="Home"
activeColor="#e91e63"
inactiveColor="#3e2465"
barStyle={{ backgroundColor: 'white' }}
>
<Tab.Screen
  name='Home'
  component={Home}
  options={{
    tabBarIcon: ({ color }) => (
      <Icon name='home'
      color='black'
      type='font-awesome'
      />
    ),
  }}
/>
<Tab.Screen
  name="search"
  component={Search}
  options={{
    tabBarLabel: 'search',
    tabBarIcon: ({ color }) => (
      <Icon
name='search'
color='black'
type='evilicon'
onPress={()=>{this.props.navigation.navigate('search')}}
/>

    ),
  }}
/>
<Tab.Screen
  name="add-circle-outline"
  component={Add}
  options={{
    tabBarLabel: 'Add',
    tabBarIcon: ({ color }) => (
      <Icon
name='ios-add-circle'
color='black'
type='ionicon'
onPress={()=>{this.props.navigation.navigate('black')}}
/>

    ),
  }}
/>
<Tab.Screen
  name="Liked"
  component={Liked}
  options={{
    tabBarLabel: 'Love',
    tabBarIcon: ({ color }) => (
      <Icon
name='heart'
color='black'
type='font-awesome'
onPress={()=>{this.props.navigation.navigate('Liked')}}
/>

    ),
  }}
/>
<Tab.Screen
  name="Profile"
  component={Profile}
  options={{
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color }) => (
      <Icon
name='user'
color='black'
type='font-awesome'
onPress={()=>{this.props.navigation.navigate('profile')}}
/>

    ),
  }}
/>
</Tab.Navigator>


    )
}







