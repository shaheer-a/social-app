import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Header } from 'react-native-elements';
import {Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';
import CardComponent from './cardcomponent';
import { ScrollView } from 'react-native-gesture-handler';



export default class Home extends Component{
    render(){
        return(
            <Container>
                <Content>
                <View style={styles.header}>
                    <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    leftComponent={{icon: 'camera', type: 'fontisto',  color: 'black'}}
                    centerComponent={{text: 'Instagram', color: 'red', }}
                    rightComponent={{icon: 'sc-telegram', type:'evilicon', color: 'black', }}
                    containerStyle={
                        {
                            backgroundColor:'white',
                            justifyContent: 'space-around',
                        }
                    }
                    />
                </View>
                <ScrollView>
                <View style={styles.icon}> 
                    <CardComponent imageSource="1"
                    likes="500 likes"
                    />
                    <CardComponent imageSource="2"
                    likes="201 likes"
                    />
                    <CardComponent imageSource="3"
                    likes="1000 likes"
                    />      
                </View>
                </ScrollView>    
                </Content>     
            </Container>
            
       
       
        );
    }
}

const styles = StyleSheet.create({

    container:{
        color: 'white',
        flexDirection: 'column',
        flex:1,
        backgroundColor:'white',
       
    
        
       
    },
    header:{
        flex: 0.15,

    },
    icon:{
        flex:1,
        backgroundColor: '#fff',
    },
    Image:{
        resizeMode: "cover",
        justifyContent:'center',
        flex:0.8, 
        backgroundColor: '#fff',
        

        
    },
   
  

    
});
