import React, { useState } from "react";
import { View, Text, StyleSheet,Image,ImageBackground,StatusBar,ScrollView ,TouchableOpacity} from "react-native";
import { COLORS, SIZES, GLOBALSTYLE, TEXTSTYLES } from '../constants';
import * as Animatable from 'react-native-animatable';
import { Container, Header, Content, Form, Item, Input, Button,  Label } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import Team from './components/Team'
import DateTimePickerModal from "react-native-modal-datetime-picker";


const BookNow = () => {
    const [isDayPickerVisible, setDayPickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const showDayPicker = () => {
        setDayPickerVisibility(true);
      };
      const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
      const hideDayPicker = () => {
        setDayPickerVisibility(false);
      };
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
    
      const handleConfirmDay = (date) => {
        console.warn("A date has been picked: ", date);
        hideDayPicker();
      };
      const handleConfirmTime = (date) => {
        console.warn("A date has been picked: ", date);
        hideTimePicker();
      };
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
                    <Text style={TEXTSTYLES.sectionHead}>Book Date</Text>
                   
        {/* <CalendarPicker
          onDateChange={this.onDateChange}
          scrollable={true}
          textStyle={{color:COLORS.white}}
          nextTitleStyle={{color:COLORS.transparent}}
          previousTitleStyle={{color:COLORS.transparent}}
          selectedDayStyle={{backgroundColor:COLORS.secondry}}
          headerWrapperStyle={{paddingLeft:0}}
          
        /> */}
        <View style={{alignItems:'center',flexDirection:'row'}}>
        <Button  title="Show Date Picker" style={{backgroundColor:COLORS.primary,padding:10,borderWidth:1,borderColor:COLORS.secondry,borderRadius:6,paddingHorizontal:20}} onPress={showDayPicker} ><Text style={{color:COLORS.white}}>SELECT DAY</Text></Button>
        <Button  title="Show Date Picker" style={{backgroundColor:COLORS.primary,padding:10,marginLeft:10,borderWidth:1,borderColor:COLORS.secondry,borderRadius:6,paddingHorizontal:20}} onPress={showTimePicker} ><Text style={{color:COLORS.white}}>SELECT TIME</Text></Button>
        </View>
        
        <DateTimePickerModal
        isVisible={isDayPickerVisible}
        mode="date"
        onConfirm={handleConfirmDay}
        onCancel={hideDayPicker}
      />
     
        <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        minimumDate={new Date()}
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
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

};

export default BookNow;

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


