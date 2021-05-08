import React ,{useState} from 'react';
import { Text, StyleSheet,StatusBar,ScrollView ,Image, TouchableOpacity,ImageBackground} from 'react-native';
import { Item, Input, Button, View, Label,Icon } from 'native-base';
import { COLORS, SIZES, GLOBALSTYLE } from '../../constants';
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfile = ({ navigation }) => {
    const [avatar,setAvatar] = useState(null)
    const chooseFromGallery = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(avatar => {
            console.log("Image",avatar);
            setAvatar(avatar.path)
          });
    }

    return (
        <View style={[GLOBALSTYLE.screenbg,styles.container]} >
            <StatusBar translucent backgroundColor="transparent"/>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.formContent}>
                <Text style={styles.headText}> Edit Profile </Text>
                <View style={{height:100,width:100,margin:10,borderRadius:100,borderWidth:2,overflow:'hidden',borderColor:COLORS.secondry,alignItems:'center',justifyContent:'center'}}>
                
                {/* <TouchableOpacity 
                onPress={chooseFromGallery}
                style={{position:'absolute',alignItems:'center',justifyContent:'center'}}>
                    <ImageBackground source={{ uri: '../assets/images/p2.jpg' }} style={{height:100,width:100}}>
                    <Icon style={{color:COLORS.white,fontSize:40}} name="add-outline"></Icon>
            
            </ImageBackground>
               
                </TouchableOpacity> */}

<TouchableOpacity style={styles.avatar}>
            <ImageBackground source={{ uri: avatar }} style={styles.avatarimg}>
              <Icon name='ios-add' size={50} style={{color:COLORS.white,fontSize:35}} onPress={chooseFromGallery} />
            </ImageBackground>
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
        fontSize: 27,
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
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
        
      },
      avatarimg: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 50,
        alignItems:'center',
        display:'flex',
        justifyContent: 'center'
    
      }

});