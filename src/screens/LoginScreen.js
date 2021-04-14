import React from 'react';
import { Text, StyleSheet,StatusBar,ScrollView } from 'react-native';
import { Item, Input, Button, View, Label } from 'native-base';
import { COLORS, SIZES, GLOBALSTYLE } from '../constants';
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({ navigation }) => {

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
                <Text style={styles.headText}> Sign In </Text>
                <Text style={styles.headDesc}>Please SignIn to Continue </Text>

                <Item
                    floatingLabel
                    style={styles.inputBox}>
                    <Label
                        style={styles.labelContent}>Email</Label>
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
                        style={styles.labelContent}>Password</Label>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        placeholderTextColor={COLORS.white}
                    />
                </Item>

                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <Text style={{ color: COLORS.lightGray, marginTop: 12.5, fontSize: 14 }}>Forgot Password?</Text>
                    <Button
                        hasText
                        transparent
                    >
                        <Text style={{ color: COLORS.secondry, fontWeight: "bold", fontSize: 14, marginLeft: 4 }}>Recover Here</Text>
                    </Button>
                </View>

                <Button
                    style={GLOBALSTYLE.themebtn}
                    mode="contained"
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ color: 'white', fontSize: 14, textTransform: 'uppercase' }}>sign in</Text>
                </Button>

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={{ color: COLORS.lightGray, marginTop: 12.5, fontSize: 14 }}>New Here? </Text>
                    <Button
                        hasText
                        transparent
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={{ color: COLORS.secondry, fontWeight: "bold", fontSize: 14, textTransform: 'uppercase' }}> Sign Up</Text>
                    </Button>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen;

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
        fontSize: 14, 
        textAlign: 'center',
         marginBottom: 20,
         },
    textContent: {
        color: COLORS.white,
        
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
        maxWidth:400
    }

});