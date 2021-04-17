import React from 'react';
import { Text, StyleSheet,StatusBar,ScrollView ,Image, TouchableOpacity} from 'react-native';
import { Item, Input, Button, View, Label,Icon } from 'native-base';
import { COLORS, SIZES, GLOBALSTYLE } from '../constants';
import * as Animatable from 'react-native-animatable';

const EditProfile = ({ navigation }) => {

    return (
        <View style={[GLOBALSTYLE.screenbg,styles.container]} >
            <StatusBar translucent backgroundColor="transparent"/>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.formContent}>
                <Text style={styles.headText}> Edit Profile </Text>
                <View style={{height:100,width:100,margin:10,borderRadius:100,borderWidth:2,overflow:'hidden',borderColor:COLORS.secondry,alignItems:'center',justifyContent:'center'}}>
                <Image style={{resizeMode:'cover',width:'100%',height:'100%',opacity:0.4}} source={require("../assets/images/p1.jpg")}/>
                <TouchableOpacity style={{position:'absolute',alignItems:'center',justifyContent:'center'}}>
                <Icon style={{color:COLORS.white,fontSize:40}} name="add-outline"></Icon>
                </TouchableOpacity>
               
                </View>

                <Item
                    style={styles.inputBox}>
                        <Icon style={{color:COLORS.lightGray}} name="person-outline"></Icon>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        placeholderTextColor={COLORS.white}
                        autoCapitalize="none"
                        value="Email Mark"
                    />
                </Item>
                <Item
                    style={styles.inputBox}>
                        <Icon style={{color:COLORS.lightGray}} name="mail-outline"></Icon>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        placeholderTextColor={COLORS.white}
                        autoCapitalize="none"
                        value="emily.mark@gmail.com"
                    />
                </Item>
                <Item
                    style={styles.inputBox}>
                        <Icon style={{color:COLORS.lightGray}} name="location-outline"></Icon>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        placeholderTextColor={COLORS.white}
                        autoCapitalize="none"
                        value="70 Fairway Dr., 41, Palm Beach Gardens, 33418"
                    />
                </Item>

                <Button
                    style={GLOBALSTYLE.themebtn}
                    mode="contained"
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ color: 'white', fontSize: 14, textTransform: 'uppercase' }}>save details</Text>
                </Button>
            </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile;

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
        marginTop: 20,
        paddingHorizontal:15
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