import React, {useState,useEffect} from 'react';
import { Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, View, Icon } from 'native-base';
import {  COLORS, SIZES, GLOBALSTYLE ,TEXTSTYLES  } from "../../constants";
import {useRoute} from '@react-navigation/native';
import {getServices} from '../../redux/actions/services'
import {connect} from 'react-redux'
import {useDispatch,useSelector} from 'react-redux'


const Service = (props) => {
    // const serviceData = useSelector(state=>state);
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getServices())
    //     console.log("SERVICE KA COMPOMNENTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",serviceData)
        
    // },[])

    const route = useRoute();
console.log(route)
console.log("rounem:"+route.name);
    return (
        <TouchableOpacity
            style={styles.serviceBox}
            onPress={
                route.name == 'Home' ? () => props.navigation.navigate('ServiceProvider',{ServiceName: props.serviceTitle}) :  () => props.navigation.navigate('BookNow') }
           
        >
            <View style={{ flex: 2 }}>
                <Image
                    source={props.imageUri}
                    resizeMode="contain"
                    style={styles.serviceImg}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.serviceText}>{props.serviceTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Service;

const styles = StyleSheet.create({
    serviceBox: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderWidth: 1,
        borderColor: COLORS.secondry,
        height: 130,
        width: 130,
        borderRadius: 8,
        marginVertical: 15,
        marginHorizontal: 10,
        padding: 10,
    },
    serviceText: {
        color: COLORS.white,
        fontSize: SIZES.h4,

    },
    serviceImg: {
        width: 60,
        height: 60,
    }

});