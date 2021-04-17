import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { COLORS, SIZES, GLOBALSTYLE, TEXTSTYLES } from '../constants';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Form, Item, Input, Button, Label, Icon,Accordion  } from 'native-base';
import Vendor from './components/Vendor'
import Service from './components/Service'

const Home = props => {
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
            <Input placeholder="Search Nearby" style={{color:COLORS.white}} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      
       
       <Text style={TEXTSTYLES.sectionHead}>Explore Services</Text>
        
          <View >
          <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} >
            <Service
              imageUri={require("../assets/images/service1.png")}
              serviceTitle="Grooming"
              navigation={props.navigation}
            />
            <Service
              imageUri={require("../assets/images/service2.png")}
              serviceTitle="Haircut/Trim"
              navigation={props.navigation}
            />
            <Service
              imageUri={require("../assets/images/service3.png")}
              serviceTitle="Men's Facial"
              navigation={props.navigation}
            />
            <Button
              onPress={() => props.navigation.navigate('AllServices')}
              style={{ alignSelf: 'center', backgroundColor: '#000', borderRadius: 100, borderWidth: 1, borderColor: '#fff', height: 55, width: 55 }}>
              <Icon name='arrow-forward-outline' style={{ fontSize: 24, color: COLORS.white }} />
            </Button>
          </ScrollView>
        </View>

          <Text style={TEXTSTYLES.sectionHead}>Explore In Your Area</Text>
          <View >
            <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} >
              <Vendor
                imageUri={require("../assets/images/salon1.jpg")}
                vendorName='Chipper Salon'
                vendorLocation='Bukhari Lane 12, Karachi Defence Housing Society'
                vendorRating='4.3'
                reviewCount='14'
                navigation={props.navigation}
              />

              <Vendor
                imageUri={require("../assets/images/salon2.jpg")}
                vendorName='Neville'
                vendorLocation='7100 Fairway Dr., 41, Palm Beach Gardens, 33418'
                vendorRating='4.4'
                reviewCount='12'
                navigation={props.navigation}
              />
              <Vendor
                imageUri={require("../assets/images/salon3.jpg")}
                vendorName='Bedale Beauty'
                vendorLocation='326 W. Chelten Ave., Suite# A, Philadelphia, 19144'
                vendorRating='4.0'
                reviewCount='20'
                navigation={props.navigation}
              />

              <Button
                onPress={() => props.navigation.navigate('AllServices')}
                style={{ alignSelf: 'center', backgroundColor: '#000', borderRadius: 100, borderWidth: 1, borderColor: '#fff', height: 55, width: 55,marginLeft:10 }}>
                <Icon name='arrow-forward-outline' style={{ fontSize: 24, color: COLORS.white }} />
              </Button>
            </ScrollView>
          </View>


        </ScrollView>
      </Animatable.View>
    </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  formPart: {
    flex: 3,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: COLORS.primary,
    paddingVertical: 30,
    paddingHorizontal: 10
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
