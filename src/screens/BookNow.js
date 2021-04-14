import React, { Component } from "react";
import { View, Text, StyleSheet,Image,ImageBackground,StatusBar,ScrollView ,TouchableOpacity} from "react-native";
import { COLORS, SIZES, GLOBALSTYLE, TEXTSTYLES } from '../constants';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Form, Item, Input, Button,  Label } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import Team from './components/Team'


export default class UserBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
    
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }
    render(){
        const { selectedStartDate } = this.state;
        const date = new Date();
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={GLOBALSTYLE.screenbg} >
            <StatusBar translucent backgroundColor="transparent" />
            
            <ImageBackground source={require("../assets/images/shopImg1.jpg")}
                style={styles.imageBg}>
              </ImageBackground>
        
            <Animatable.View style={styles.formPart}
            
            >
               <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
               <View style={styles.serviceDesc}>
                        <Text style={styles.serviceName}>Haircut & Style </Text>
                        <Text style={styles.price}>$45</Text>
                    </View>
                    <Text style={{color:COLORS.lightGray,fontSize:15,}}>Enjoy the exclusive experience of a complete haircut that too with a compimentory Hot towel and Extras.</Text>
                    <Text style={{color:COLORS.white,fontSize:15,marginTop:10}}>By - Bedale Beauty</Text>
                    <Text style={TEXTSTYLES.sectionHead}>select day</Text>
                    <View style={{borderWidth:2,borderColor:COLORS.secondry,backgroundColor:'#000',borderRadius:10,alignItems:'center',overflow:'hidden',height:320}}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          scrollable={true}
          textStyle={{color:COLORS.white}}
          nextTitleStyle={{color:COLORS.transparent}}
          previousTitleStyle={{color:COLORS.transparent}}
          selectedDayStyle={{backgroundColor:COLORS.secondry}}
          headerWrapperStyle={{paddingLeft:0}}
          
        />
      </View>
      <Text style={TEXTSTYLES.sectionHead}>Choose Stylist</Text>
      <ScrollView scrollEventThrottle={16} horizontal={true}  showsHorizontalScrollIndicator={false} >
          <Team imageUri={require("../assets/images/p2.jpg")} memberName ='John Deo'/>
          <Team imageUri={require("../assets/images/p1.jpg")} memberName ='Emily Mark'/>
          <Team imageUri={require("../assets/images/p3.jpg")} memberName ='Chris John'/>
            </ScrollView>

            <Text style={TEXTSTYLES.sectionHead}>Availible time slots</Text>
            <ScrollView scrollEventThrottle={16} horizontal={true}  showsHorizontalScrollIndicator={false}>
    
           
    <TouchableOpacity style={styles.time}>
        <Text style={{color:COLORS.white}}>11:00PM - 15:00PM</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.time}>
        <Text style={{color:COLORS.white}}>1:00PM - 1:15PM</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.time}>
        <Text style={{color:COLORS.white}}>2:00PM - 2:15PM</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.time}>
        <Text style={{color:COLORS.white}}>2:15PM - 2:30PM</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.time}>
        <Text style={{color:COLORS.white}}>11:00PM - 12:00PM</Text>
    </TouchableOpacity>
    </ScrollView>
    <Button style={GLOBALSTYLE.themebtn}>
                        <Text style={{color:COLORS.white,textTransform:'uppercase'}}>Book appointment</Text>
                    </Button>
               </ScrollView>
            </Animatable.View>
           </View>
            
          );
    }

};


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
        height:300,
        backgroundColor: COLORS.secondry,
        opacity: 0.5,
    },
    datePicker:{
        alignSelf:'center'
    
    },
     timeslots:{
         flexDirection:'row',
         marginHorizontal:15,
         marginVertical:15
     },
     time:{
         borderWidth:1,
         borderColor:COLORS.lightGray,
         paddingVertical:10,
         paddingHorizontal:20,
         marginRight:10,
         borderRadius:30,
     },
     serviceDesc:{
         flexDirection:'row',
         justifyContent:'space-between',
    
     },
     serviceName:{
         color:COLORS.white,
         fontSize:27,
         fontWeight:'bold',
         width:'60%'    
     }
     ,price:{
         color:COLORS.lightGray,
         fontSize:25,
     }
});


