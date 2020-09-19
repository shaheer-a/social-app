import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import {Header} from 'react-native-elements';
import {Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';
import CardComponent from './cardcomponent';
import { ScrollView } from 'react-native-gesture-handler';



export default class Home extends Component{
    render(){
        return(
            <Container>
                <Header
  leftComponent={{ icon: 'camera', type: 'fontisto',  color: 'black'}}
  centerComponent={{ text: 'Instagram', style: { color: 'black', fontWeight:'bold', fontSize:20, } }}
  
  rightComponent={{ icon: 'send', type:'font-awesome', color: 'black', onPress: ()=>{this.props.navigation.navigate('Profile')}}}
  containerStyle={{
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  }}
/>

                <Content>
                <View style={styles.header}>
                
                    <View style={{height:100}}>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:7,}}>
                        <Text style={{fontWeight:'bold'}}>Stories</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name="md-play" style={{fontSize:14}}></Icon>
                        <Text style={{fontWeight:"bold"}}>Watch All</Text>
                        </View>
                        </View>
                        <View style={{flex:3}}>
                            <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{alignItems:'center', paddingStart:5,paddingEnd:5}}
                            >
                                <Thumbnail
                                style={{marginHorizontal:5, borderColor:'pink', borderLeftWidth:2}}
                                source={require('./img/1.jpg')}
                                />
                                <Thumbnail
                                style={{marginHorizontal:5, borderColor:'pink', borderLeftWidth:2}}
                                source={require('./img/2.jpg')}
                                />
                                <Thumbnail
                                style={{marginHorizontal:5, borderColor:'pink', borderLeftWidth:2}}
                                source={require('./img/3.jpg')}
                                />
                                <Thumbnail
                                style={{marginHorizontal:5, borderColor:'pink', borderLeftWidth:2}}
                                source={require('./img/4.jpg')}
                                />
                                <Thumbnail
                                style={{marginHorizontal:5, borderColor:'pink', borderLeftWidth:2}}
                                source={require('./img/5.jpg')}
                                />
                                <Thumbnail
                                style={{marginHorizontal:5, borderColor:'pink', borderLeftWidth:2}}
                                source={require('./img/6.jpg')}
                                />
                                <Thumbnail
                                style={{marginHorizontal:5, borderColor:'pink', borderLeftWidth:2}}
                                source={require('./img/7.jpg')}
                                />
                            </ScrollView>

                        </View>
                    </View>
                
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
