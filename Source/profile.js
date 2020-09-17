import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, Header, SocialIcon, Button } from 'react-native-elements';

export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.user}>
                <Icon
                name='user'
                color='black'
                type='evilicon'
                size={70}
                />
                <Text style={{textAlign: 'center'}}>Name, Age</Text>
                
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', flex: 0.2}}>
                <View style={{flex:1}}>
                <Icon
                 name='settings'
                 color='black'
                 type='simple-line-icon'
                 size={50}
                />
                <Text style={{marginLeft:40}}>Settings</Text>
                </View>
                <View style={{flex:1}}>
                <Icon
                 name='add-a-photo'
                 color='black'
                 type='materialicons'
                 size={50}
                 />
                 <Text style={{marginLeft:40}}>Add Media</Text>
                 </View>
                 <View style={{flex:1}}>
                <Icon
                 name='edit'
                 color='black'
                 type='entypo'
                 size={50}
                 title='Edit Profile'
                />
                <Text style={{marginLeft:40}}>Edit Info</Text>
                </View>
                </View>
                </View>
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
    },
    user:{
      flex:0.4,
    },
    icon: {
      flex: 0.6,
      
    },
  
      
  });
