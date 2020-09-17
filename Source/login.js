import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import Input from './input';
import { Icon } from 'react-native-elements';
export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.insta}>
                <Image
                source={require('./img/insta.png')}
                />
                </View>
                <View>
               <TextInput style={styles.inputTitle}placeholder= 'Phone number, username, or email'/>
               <TextInput style={styles.inputTitle}placeholder= 'Password'/> 
                </View>
                <View style={styles.button}>
                    <Button
                    title='LogIn'
                    color='#ADD8E6'
                    onPress={()=>{this.props.navigation.navigate('Home')}}
                    />
                    <Text style={styles.text}>OR</Text>
                </View>
                <View style={styles.socialButton}>
                <Icon
                            name='facebook-square'
                            type='antdesign'
                            color='blue' />
                            <Text>Log in with Facebook</Text>
                             </View>
                             <View>
                             <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Password')}}>
                            <Text style={styles.text, styles.link, { textAlign: "center", color: 'black', marginVertical:20, } }>Forgot Password?</Text>
                            </TouchableOpacity>
                            <View style={styles.signup}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity>
                                <Text style={{color:'blue'}}>Sign up</Text>
                            </TouchableOpacity>
                            </View>
             </View>

            </View>
            
        )
    }}
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'white',

        },
        signup:{
            
            alignItems:'center',
            marginVertical:30,

        },
        text:{
            textAlign:'center',
            marginVertical:25,

        },
        insta:{
            justifyContent:'center',
            alignItems:'center',
            marginVertical: 35,
        },
        inputTitle: {
            marginVertical:12,
            fontSize: 20,
            color: 'white',
            borderColor:'black',
            textAlign:'center',
        
            borderWidth: StyleSheet.hairlineWidth,
            marginHorizontal:12,
        },
        socialButton: {
            flexDirection: "row",
            marginHorizontal: 12,
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "rgba(171, 180, 189, 0.65)",
            borderRadius: 4,
            backgroundColor: "#fff",
            shadowColor: "rgba(171, 180, 189, 0.35)",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 1,
            shadowRadius: 20,
            elevation: 5,
            justifyContent:'center'
        },
        button:{
            shadowRadius:20,
            paddingHorizontal:12,
            shadowOffset: { width: 0, height: 10 },
            paddingVertical:12,
           
        }
    
    
 
    })