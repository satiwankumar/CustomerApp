import React from 'react';
import { Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, View, Icon,Card, CardItem, Body } from 'native-base';
import {  COLORS, SIZES, GLOBALSTYLE ,TEXTSTYLES  } from "../../constants";

const Vendor = (props) => {
    return (
        <TouchableOpacity
        onPress={() => props.navigation.navigate('VendorDetail')}
        
        >
        <Card style={styles.shopBox}>
            <CardItem style={{backgroundColor:COLORS.transparent,}}>
              <Body>
                <Image source={props.imageUri}
                         resizeMode="cover"
                           style={styles.shopImg}/>
                <View style={styles.shopText}>
                <Text style={styles.shopHead}>{props.vendorName}</Text>
                <Text style={styles.shopDesc}>{props.vendorLocation}</Text>
                <View style={{ flexDirection: 'row',marginTop:8 }}>
                <Icon style={{fontSize:15,color:'#ffe31a'}} name='star' />
                    <Text style={{ color: COLORS.lightGray, marginLeft: 5 }}>{props.vendorRating} ({props.reviewCount} Reviews)</Text>
                </View>
            </View>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
)
    }

export default Vendor;

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