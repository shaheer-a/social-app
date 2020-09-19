import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';
 class CardComponent extends Component{
     render(){

        const images={
            "1": require('./img/me21.jpg'),
            "2": require('./img/romeo.jpg'),
            "3": require('./img/5.jpg'),

        }
         return(
             <View>
                 
             <Card>
                <CardItem>
                    <Left>
                        <Thumbnail
                        source={require('./img/me.jpg')}
                        />
                        <Body>
                            <Text>shaheer_ahhmad</Text>
                            <Text>Lahore</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height:200, width:null, flex:1}}/>
                </CardItem>
                
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='heart-outline'
                            style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='chatbubbles-outline'
                            style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='send-outline'
                            style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:20}}>
         <Text>{this.props.likes}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{fontStyle:'italic', fontSize:17}}>Ilyas_Hussain   </Text>
                            Nice Picture Bro
                        </Text>
                    </Body>
                </CardItem>
            </Card> 
            </View>
         );
     }
 }

 export default CardComponent;

 const styles = StyleSheet.create({
     container:{
         flex:1,
         alignItems:'center',
         justifyContent: 'center'
     }
 });