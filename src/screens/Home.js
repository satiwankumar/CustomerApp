import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, ScrollView, TouchableOpacity,BackHandler,Alert } from "react-native";
import { COLORS, SIZES, GLOBALSTYLE, TEXTSTYLES } from '../constants';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Form, Item, Input, Button, Label, Icon,Accordion  } from 'native-base';
import Vendor from './components/Vendor'
import {getNearbyShops} from '../redux/actions/shops'
import Service from './components/Service'
const Home = (props,{isAuthenticated}) => {
  const [keyword,setKeyword] = useState('')

  console.log('Home rpopsss',props.isAuthenticated)
  return (
    <View style={GLOBALSTYLE.screenbg} >
     
      <StatusBar translucent backgroundColor="transparent" />

      <ImageBackground source={require("../assets/images/b3.jpg")}
        style={styles.imageBg}>
          <View style={styles.overlay}></View>
      </ImageBackground>

      <Animatable.View style={styles.formPart}
        animation="slideInUp"
      >

<Header searchBar rounded style={{backgroundColor:COLORS.primary}}>
          <Item style={{backgroundColor:COLORS.black,height:50,borderRadius:8}}>
            <Icon name="ios-search" />
            <Input placeholder="Search Nearby Shops"
             value={keyword}
             onChangeText={(e)=>setKeyword(e)}
             style={{color:COLORS.white}} />
            <Button style={{backgroundColor:COLORS.transparent,elevation:0}} onPress={() => setKeyword('')}>
             <Icon style={{color:COLORS.lightGray}}  name="close-sharp"></Icon>
             </Button>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      
       
       <Text style={TEXTSTYLES.sectionHead}>Explore Services</Text>
        
          <View >
          <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} >
            <Service navigation={props.navigation}/>
            
          </ScrollView>
        </View>

          <Text style={TEXTSTYLES.sectionHead}>Explore In Your Area</Text>
          <View >
            <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} >
             <Vendor  keyword={keyword}  navigation={props.navigation}/>
             
            </ScrollView>
          </View>


        </ScrollView>
      </Animatable.View>
    </View>

  );
};


// const mapStateToProps = (state) => ({
//   services: state.services,
//   auth:state.auth
// });
export default Home;

const styles = StyleSheet.create({
  formPart: {
    flex: 3,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: COLORS.primary,
    paddingVertical: 30,
    paddingHorizontal: 10,
    
  },
  imageBg:{
    width:'100%',
    resizeMode:'cover',
    flex:1,
    height:350,
    // backgroundColor: COLORS.secondry,
    // opacity: 0.6,
}
,
overlay:{
  backgroundColor:COLORS.secondry,
  position:'absolute',
  width:'100%',
  height:'130%',
  opacity:0.5,
  zIndex:1
},
});
