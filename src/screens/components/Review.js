import React from 'react';
import { Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, View, Icon,Card, CardItem, Body } from 'native-base';
import {  COLORS, SIZES, GLOBALSTYLE ,TEXTSTYLES  } from "../../constants";

const Review = (props) => {
    return (
        <Card style={{backgroundColor:COLORS.primary}}>
        <CardItem style={{backgroundColor:COLORS.transparent,}}>
          <Body>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{height:60,width:60,borderRadius:100,overflow:'hidden'}}>
                <Image source={props.authImg} resizeMode="cover"
                       style={{width:'100%',height:'100%'}}/>
                </View>
              
                    
                       <View style={{marginLeft:20}}>
                           <Text style={{color:COLORS.white}}>{props.authName}</Text>
                           <Text style={{color:COLORS.lightGray}}>{props.reviewDate}</Text>
                       </View>
              </View>
            

            <View style={styles.shopText}>
            <Text style={{color:COLORS.white}}>{props.review}</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
            <Icon style={{color:"#f3c030",fontSize:15,marginRight:3}} name="star"></Icon>
            <Icon style={{color:"#f3c030",fontSize:15,marginRight:3}} name="star"></Icon>
            <Icon style={{color:"#f3c030",fontSize:15,marginRight:3}} name="star"></Icon>
            <Icon style={{color:"#f3c030",fontSize:15,marginRight:3}} name="star"></Icon>
            <Icon style={{color:"#ccc",fontSize:15,marginRight:3}} name="star"></Icon>
            </View>
        </View>
          </Body>
        </CardItem>
      </Card>
)
    }

export default Review;

const styles = StyleSheet.create({
    shopBox: {
        borderWidth: 1,
        borderColor: COLORS.secondry,
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        width:300,
        marginLeft:15

    },
    shopHead: {
        color: COLORS.white,
        textTransform: 'uppercase',
        fontSize: 17,
    }
    ,
    shopDesc: {
        color: COLORS.lightGray,
        fontSize: 13,
    },
    shopText: {
        paddingVertical:10
    },
    shopImg: {
        width: '100%',
        height: 160,
        borderRadius: 8,
        flex:1

    }

});