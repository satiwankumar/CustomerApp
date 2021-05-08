
import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet,Image,ImageBackground,StatusBar,ScrollView, TouchableOpacity } from "react-native";
import { COLORS, SIZES, GLOBALSTYLE } from '../../constants';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Form, Item, Input, Button,  Label, Icon } from 'native-base';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

const LocationAccess =(props) => {
  const [GrantedPermission,setGrantedPermission] = useState(false)
  const getloc = () =>{
    Geolocation.getCurrentPosition(data => console.warn(data));
    console.warn('TURN ON LOCATION ACCESS')
    props.navigation.navigate('Home')
  }

  useEffect(() => {
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                    'title': 'Location Access Required',
                    'message': 'This App needs to Access your location'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                setGrantedPermission(true)
                this._getCurrentLocation();

            } else {
                alert("Permission Denied");
            }
        } catch (err) {
                alert("err",err);
        }
    }
})

    
    // async function requestLocationPermission() {
      
    //     try {
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            
    //       )
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         setGrantedPermission(true)
    //         Geolocation.getCurrentPosition(info => console.warn(info));

    //         props.navigation.navigate('Home')
    //       } else {
    //         console.log("Location permission denied")
    //       }
    //     } catch (err) {
    //       console.warn(err)
    //     }
    //   }
  return (
    <View style={GLOBALSTYLE.screenbg} >
    <StatusBar translucent backgroundColor="transparent"/>

    <View style={styles.formPart}
    animation="slideInUp"
    >
       <View  style={{alignItems:'center',justifyContent:'center',flex:1}}>
       <Icon style={{color:COLORS.secondry,fontSize:100}} name="location-outline"></Icon>
       <Text style={{fontSize:26,textAlign:'center',color:COLORS.white,textTransform:'uppercase'}}> Enable Location Services</Text>
       <Text style={{color:COLORS.lightGray,fontSize:16,marginBottom:30,textAlign:'center'}}>Turn on Location Services to see what's nearby </Text>
         <TouchableOpacity onPress={getloc} style={{backgroundColor:COLORS.black,padding:12,borderRadius:8,borderColor:COLORS.secondry,borderWidth:1,marginBottom:7,width:SIZES.width*0.90}}>
             <Text style={{color:COLORS.white,fontSize:17,textTransform:'uppercase',textAlign:'center'}}>Allow Location Access</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{backgroundColor:COLORS.black,padding:12,borderRadius:8,borderColor:COLORS.secondry,borderWidth:1,marginBottom:7,width:SIZES.width*0.90}}>
             <Text style={{color:COLORS.white,fontSize:17,textTransform:'uppercase',textAlign:'center'}}>Not Now</Text>
         </TouchableOpacity>
       </View>
    </View>
   </View>
    
  );
};

export default LocationAccess;

const styles = StyleSheet.create({
    formPart:{
        flex:1,
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
        backgroundColor: COLORS.secondry,
        opacity: 0.6,
    }
});
