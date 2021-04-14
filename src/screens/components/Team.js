import React from 'react';
import { Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, View, Icon } from 'native-base';
import {  COLORS, SIZES, GLOBALSTYLE ,TEXTSTYLES  } from "../../constants";

const Team = (props,navigation) => {
    return (
        <View style={styles.teamBox}>
        <Image
                source={props.imageUri}
                resizeMode="cover"
                style={styles.teamImg}
            />
            <Text style={styles.memberName}>{props.memberName}</Text>
        </View>
    )
}

export default Team;

const styles = StyleSheet.create({
    teamBox:{width:100,margin:10},
    teamImg:{height:100,width:100,borderRadius:10},
    memberName:{color:COLORS.white,textAlign:'center',padding:6}

});