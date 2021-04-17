import React from "react";
import { View, Text, StyleSheet,Image,ImageBackground,StatusBar,ScrollView } from "react-native";
import { COLORS, SIZES, GLOBALSTYLE, TEXTSTYLES } from '../constants';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Form, Item, Input, Button,  Label } from 'native-base';
import Vendor from './components/Vendor'

const ServiceProvider = (props) => {
    const { ServiceName } = props.route.params;
    console.log(ServiceName);
  return (
    <View style={GLOBALSTYLE.screenbg} >
    <StatusBar translucent backgroundColor="transparent"/>
    
    {/* <ImageBackground source={require("../assets/images/b3.jpg")}
        style={styles.imageBg}>
      </ImageBackground> */}

    <Animatable.View style={styles.formPart}
    animation="slideInUp"
    >
        <Text style={TEXTSTYLES.sectionHead}>{ServiceName} Services</Text>
       <ScrollView contentContainerStyle={{ flexGrow: 1 ,alignItems:'center'}}>
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
       </ScrollView>
    </Animatable.View>
   </View>
    
  );
};

export default ServiceProvider;

const styles = StyleSheet.create({
    formPart:{
        flex:3,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:COLORS.primary,
        paddingVertical:30,
        paddingHorizontal:10
    },
    imageBg:{
        width:'100%',
        resizeMode:'cover',
        flex:1,
        height:450,
        backgroundColor: COLORS.secondry,
        opacity: 0.6,
    }
});
