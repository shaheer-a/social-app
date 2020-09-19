import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { Icon, Container, Left, Body, Right, Content, Header, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CardComponent from './cardcomponent';

var images =[
  require('./img/10.jpg'),
  require('./img/2.jpg'),
  require('./img/9.jpg'),
  require('./img/4.jpg'),
  require('./img/5.jpg'),
  require('./img/6.jpg'),
  require('./img/7.jpg'),
  require('./img/8.jpg'),
  require('./img/3.jpg'),
  require('./img/1.jpg'),
]

var {width, height} = Dimensions.get('window')
export default class Profile extends Component{
  constructor(props){
    super()
    
    this.state={
      activeIndex:0
    }
  }
  segmentClicked = (index) =>{
    this.setState({
      activeIndex: index
    })
  }
  rendrSectionOne=()=>{
    return images.map((image, index)=>{
      return(
        <View key={index} style={[{width:(width)/3},{height:(height)/3},
          {marginBottom:2},
          index%3!==0?{paddingLeft:2}:{paddingLeft:0}
        ]}>
        <Image style={{flex:1, width: undefined, height: undefined}}
        source={image}
        />
        </View>
      )
    })
  }
  rendrSection=()=>{
    if(this.state.activeIndex==0){
      return(
        <View style={{ flexDirection:'row', flexWrap:'wrap'}}>
          {this.rendrSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex==1){
      return(
        <View>
          <CardComponent imageSource="1" likes="100"/>
        </View>
      )
    }


  }
    render(){
        return(
          <Container style={{flex:1, backgroundColor:'white'}}>
            <Header style={{backgroundColor:'white'}}>
              <Left><Icon name="add" style={{paddingLeft:10,}}></Icon></Left>
              <Body><Text>shaheer_ahhmad</Text></Body>
              <Right><EntypoIcon name="menu" style={{paddingRight:10, fontSize:32,}}></EntypoIcon></Right>
            </Header>
            <Content>
              <View style={{paddingTop:10}}>
                <View style={{flexDirection:'row'}}>
                <View style={{flex:1, alignItems:'center'}}>
                <Image
                source={require('./img/me.jpg')}
                style={{width:75, height:75, borderRadius: 37.5}}
                />
                <Text>Shaheer Ahmad</Text>
                </View>
                <View style={{flex:3}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <View style={{alignItems:'center'}}>
                  <Text>264</Text>
                  <Text style={{fontSize:10, color:'grey'}}>posts</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                  <Text>208</Text>
                  <Text style={{fontSize:10, color:'grey'}}>followers</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                  <Text>70</Text>
                  <Text style={{fontSize:10, color:'grey'}}>following</Text>
                    </View>   
                  </View>
                  <View style={{flexDirection:'row', paddingTop:10}}>
                    <Button bordered dark style={{flex:3, marginLeft:10, justifyContent:'center', height:30,}}>
                      <Text>Edit Profile</Text>
                    </Button>

                  </View>
                </View>
                </View>
              </View>
              <View>
                <View style={{flexDirection:'row', justifyContent:"space-around", borderTopWidth:1, borderTopColor:'#eae5e5'}}>
                  <Button transparent
                  onPress={()=>this.segmentClicked(0)}
                  active={this.state.activeIndex == 0}
                  >
                    <Icon name="apps-outline"
                    style={[this.state.activeIndex == 0 ?{}:{color:'grey'}]}/>
                  </Button>
                  <Button transparent
                  onPress={()=>this.segmentClicked(1)}
                  active={this.state.activeIndex == 1}
                  >
                    <Icon name="tv-outline"
                    style={[this.state.activeIndex == 1 ?{}:{color:'grey'}]}
                    />
                  </Button>
                 
                  <Button transparent
                  onPress={()=>this.segmentClicked(2)}
                  active={this.state.activeIndex == 2}
                  >
                    <Icon name="people-outline"
                    style={[this.state.activeIndex == 2 ?{}:{color:'grey'}]}
                    />
                  </Button>

                </View>
              </View>
              {this.rendrSection()}
            </Content>
          </Container>
            
        
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
