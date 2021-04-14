
import React from "react";
import { View, Text, StyleSheet,Image,ImageBackground,StatusBar,ScrollView } from "react-native";
import { COLORS, SIZES, GLOBALSTYLE, TEXTSTYLES } from '../constants';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Form, Item, Input, Button,  Label,Icon} from 'native-base';
import Service from './components/Service'
import PopularService from './components/PopularService'
import Package from "./components/Package";

const VendorDetail = props => {
  return (
    <View style={GLOBALSTYLE.screenbg} >
    <StatusBar translucent backgroundColor="transparent"/>
    
    <ImageBackground source={require("../assets/images/b4.jpg")}
        style={styles.imageBg}>
          <View style={styles.overlay}></View>
          <View style={{flexDirection:'row',padding:20,alignItems:'flex-end',justifyContent:'space-around',zIndex:2,flex:1}}>
           <Text style={styles.bannerTitle}>Marguerite Day Salon</Text>
          
         <View style={{width:'30%',flexDirection:'row',textAlign:'right',justifyContent:'flex-end'}}>
             <Text style={{fontSize:20,color:COLORS.primary,fontWeight:'bold'}}>4.5                 
             </Text>
             <Icon name='star' style={{fontSize:24, color: '#e7ff1e'}} />
         </View>
           </View>
      </ImageBackground>

    <Animatable.View style={styles.formPart}
    animation="slideInUp"
    >
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
        <Text style={TEXTSTYLES.sectionHead}>Availible Services</Text>
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
          <Text style={TEXTSTYLES.sectionHead}>Packages & Offers</Text>
          <View>
            <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} >
          <Package
          imageUri={require("../assets/images/b3.jpg")}
          packageName='Get 50% Off on All Hair Services'
          validity='Valid Till 2nd April'
          oldPrice='90'
          newPrice='20'
          />

        <Package
          imageUri={require("../assets/images/b2.jpg")}
          packageName='Good Friday Sale (Flat 20% OFF)'
          validity='25th April - 28th April'
          oldPrice='90'
          newPrice='20'
          />
           <Package
          imageUri={require("../assets/images/b4.jpg")}
          packageName='Get 50% Off on All Hair Services'
          validity='Valid Till 2nd April'
          oldPrice='90'
          newPrice='20'
          />
          </ScrollView>
          </View>

          <Text style={TEXTSTYLES.sectionHead}>
             Popular Services
           </Text>
           <PopularService
           serviceImg={require("../assets/images/pop1.jpg")}
           serviceName='Hair Styling'
           time='45'
           price='30'
           />
             <PopularService
           serviceImg={require("../assets/images/fac.jpg")}
           serviceName='Facial Treatment'
           time='60'
           price='30'
           />

<Text style={TEXTSTYLES.sectionHead}>Gallery</Text>
<ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false} >
  <Image style={{height:200,width:300,resizeMode:'cover',margin:10}} source={require("../assets/images/shopImg3.jpg")}/>
  <Image style={{height:200,width:300,resizeMode:'cover',margin:10}} source={require("../assets/images/shopImg2.jpg")}/>
  <Image style={{height:200,width:300,resizeMode:'cover',margin:10}} source={require("../assets/images/shopImg1.jpg")}/>
  <Image style={{height:200,width:300,resizeMode:'cover',margin:10}} source={require("../assets/images/shopImg4.jpg")}/>
  <Image style={{height:200,width:300,resizeMode:'cover',margin:10}} source={require("../assets/images/shopImg5.jpg")}/>
  <Image style={{height:200,width:300,resizeMode:'cover',margin:10}} source={require("../assets/images/shopImg6.jpg")}/>
</ScrollView>
           </ScrollView>
    </Animatable.View>
   </View>
    
  );
};

export default VendorDetail;

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
    bannerTitle: { 
     color: COLORS.primary, 
     fontSize:25,
     fontWeight: 'bold' ,
     width:'70%',
   
             }
});
