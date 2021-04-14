import React from 'react';
import { Text, StyleSheet, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Item, Input, Button, View, Label } from 'native-base';
import { COLORS, SIZES ,GLOBALSTYLE } from '../constants';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'native-base';


const SignUp = ({ navigation }) => {
    return (
        <View style={[GLOBALSTYLE.screenbg,styles.container]} >
        <StatusBar translucent backgroundColor="transparent"/>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>

            
            <View style={styles.formContent}>
                <Animatable.Image
                    animation='zoomIn'
                    style={styles.logo}
                    source={require("../assets/images/logo.png")}
                />
                <Text style={styles.headText}> Your Location </Text>
                <Text style={styles.headDesc}>Enter Details to View Nearby Shops </Text>
               
                <Item
                    floatingLabel
                    style={styles.inputBox}>
                    <Label
                        style={styles.labelContent}>Select Country</Label>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        placeholderTextColor={COLORS.white}
                        autoCapitalize="none"
                    />
                </Item>
                <Item
                    floatingLabel
                    style={styles.inputBox}>
                    <Label
                        style={styles.labelContent}>Select City</Label>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        placeholderTextColor={COLORS.white}
                        autoCapitalize="none"
                    />
                </Item>
                <Item
                    floatingLabel
                    style={styles.inputBox}>
                    <Label
                        style={styles.labelContent}>Address</Label>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        placeholderTextColor={COLORS.white}
                        autoCapitalize="none"
                    />
                </Item>

                <Item
                    floatingLabel
                    style={styles.inputBox}>
                    <Label
                        style={styles.labelContent}>Zip Code</Label>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        placeholderTextColor={COLORS.white}
                        autoCapitalize="none"
                    />
                </Item>
                <Button
                style={GLOBALSTYLE.themebtn}
                mode="contained"
                onPress={() => navigation.navigate('LoginScreen')}
                >
                <Text style={{ color: 'white', fontSize: 16,textTransform: 'uppercase'  }}>Next 
                <Icon style={{fontSize:15,marginLeft:10}} name='arrow-forward' />
                </Text>
            </Button>
            

            </View>
            </ScrollView>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: SIZES.width * 0.30,
        height: SIZES.width * 0.30,
        resizeMode: "contain",
        marginVertical: 30,
        alignSelf: 'center'
    },
    headText: {
        fontFamily: 'RobotoSlab-Regular',
        fontSize: 32,
        color: COLORS.white,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    headDesc:{
        color: COLORS.lightGray, 
        fontSize: 15,
         textAlign: 'center',
          marginBottom: 20,
         },
    textContent: {
        color: COLORS.white
    },
    inputBox: {
        marginTop: 10,
        backgroundColor: COLORS.black,
        color: '#707070',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: COLORS.transparent,
        marginTop: 20
    },
    labelContent: {
        color: COLORS.lightGray,
        marginLeft: 20,
        marginTop: -13,
    },
    formContent: {
        width: SIZES.width * 0.80,
        alignItems: 'center',
    }

});