import React from 'react';
import { Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container, Header, Content, Form, Item, Input, Button, View, Icon, Card, CardItem, Body } from 'native-base';
import { COLORS, SIZES, GLOBALSTYLE, TEXTSTYLES } from "../../constants";

const Package = (props) => {
    return (
            <Card style={styles.shopBox}>
                <CardItem style={{ backgroundColor: COLORS.transparent, }}>
                    <Body>
                        <Image source={props.imageUri}
                            resizeMode="cover"
                            style={styles.shopImg} />
                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                            <View style={{ width: '70%' }}>
                                <Text style={styles.shopHead}>{props.packageName}</Text>
                                <Text style={styles.shopDesc}>{props.validity}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: COLORS.lightGray, marginRight: 10, fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>${props.oldPrice}</Text>
                                <Text style={{ color: COLORS.secondry, fontSize: 20 }}>${props.newPrice}</Text>
                            </View>
                        </View>
                    </Body>
                </CardItem>
            </Card>
    )
}

export default Package;

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
        lineHeight: 24
    }
    ,
    shopDesc: {
        color: COLORS.lightGray,
        fontSize: 13,
        marginTop:5
    },
    shopText: {
        flex: 1,
        padding: 15,
    },
    shopImg: {
        width: '100%',
        height: 160,
        borderRadius: 8,

    }

});