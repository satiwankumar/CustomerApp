import React from 'react';
import { Text, StyleSheet, Image,StatusBar,TouchableOpacity,ScrollView ,ImageBackground} from 'react-native';
import { Container, Header, Content,Card,CardItem,Body,FooterTab, Form, Item, Input,Icon, Button, View, Label } from 'native-base';
import {  COLORS, GLOBALSTYLE, SIZES,TEXTSTYLES  } from '../constants'

const UserProfile = ({navigation}) => {
    return(
        <Container style={styles.container}>
              <StatusBar translucent backgroundColor="transparent" />
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
          <View>
          <Image style={{height:100,width:100,resizeMode:'cover',margin:10,borderRadius:100,borderWidth:2,borderColor:COLORS.secondry}} source={require("../assets/images/p1.jpg")}/>
          </View>
        
        
        <View style={{alignItems:'center'}}>
          <Text style={{color:COLORS.white,fontSize:30,fontFamily:'RobotoSlab-Regular'}}>Emily Mark</Text>
         <View style={{borderWidth:1,borderColor:COLORS.lightGray,padding:10,width:SIZES.width * 0.95,marginTop:20,borderRadius:8}}>
         <View style={{flexDirection:'row',alignItems:'center',marginBottom:12}}>
          <Icon style={{color:COLORS.white,marginRight:7}} name="location-outline"></Icon>
          <Text style={{color:COLORS.lightGray,fontSize:16,width:'95%'}}>70 Fairway Dr., 41, Palm Beach Gardens, 33418</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon style={{color:COLORS.white,marginRight:7}} name="mail-outline"></Icon>
          <Text style={{color:COLORS.lightGray,fontSize:16}}>           
            emily.mark@gmail.com</Text>
          </View>
         </View>
         

          <TouchableOpacity
                        hasText
                        transparent
                        style={{flexDirection:'row',alignItems:'center',marginTop:15}}
                        onPress={() => navigation.navigate('EditProfile')}
                    >
                      <Icon style={{color:COLORS.secondry}} name="create-outline"></Icon>
                        <Text style={{ color: COLORS.secondry, fontWeight: "bold", fontSize: 16}}>Edit Profile</Text>
                    </TouchableOpacity>
        
          <TouchableOpacity
                style={[GLOBALSTYLE.themebtn,styles.alignBtn]}
                mode="contained"
                onPress={() => navigation.navigate('LoginScreen')}
                >
                <Text style={{ color: 'white', fontSize: 16,textTransform: 'uppercase',}}>LogOut
                </Text>
            </TouchableOpacity> 
              
          
          </View>
          
            

        
        </View>
            </ScrollView>
            </Container>
    )
}

export default UserProfile;
const styles = StyleSheet.create({
    container: {                
      backgroundColor: COLORS.primary,
    },
    alignBtn:{
      marginTop:30,
      alignItems:'center' 
    }
})