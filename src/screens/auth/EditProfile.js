import React ,{useState} from 'react';
import { Text, StyleSheet,StatusBar,ScrollView ,Image, TouchableOpacity,ImageBackground} from 'react-native';
import { Item, Input, Button, View, Label,Icon } from 'native-base';
import { COLORS, SIZES, GLOBALSTYLE } from '../../constants';
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-crop-picker';
import { updateProfile } from '../../redux/actions/profile'
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import ImgToBase64 from 'react-native-image-base64';

const EditProfile = (props,{ navigation,updateProfile }) => {
    const  formData = props.route.params;
    // const formData = { firstname,lastname,email,address}
    const [EditData,setEditData] = useState({
        firstname:formData.firstname,
        lastname:formData.lastname,
        email:formData.email,
        address:formData.address,
        image:formData.image,
    })
    console.log("edit ka page haiiaiii",formData)
    const chooseFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false
        }).then(avatar => {
            console.log("Image", avatar);
            setEditData({ ...EditData, image: avatar.path })
        });
    }

    const onSubmit= async ()=>{
        await ImgToBase64.getBase64String(EditData.image)
        .then(base64String => {
            console.log("base formatt",base64String)
            setEditData({ ...EditData, image: base64String })

        }

        )
        .catch(err =>
            Toast.show("Image Type Not Supported", Toast.SHORT)
        );
        console.log("UPDATED frm data",EditData.image)
        // props.updateProfile(EditData)
     

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
            <ImageBackground source={{ uri: EditData.image }} style={styles.avatarimg}>
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
                        value={EditData.firstname}
                        onChangeText={(e)=>setEditData({...EditData,firstname:e})}
                    />
                </Item>

                <Item
                    style={styles.inputBox}>
                        <Icon style={{color:COLORS.lightGray}} name="person-outline"></Icon>
                    <Input
                        style={styles.textContent}
                        autoCorrect={false}
                        placeholderTextColor={COLORS.white}
                        autoCapitalize="none"
                        value={EditData.lastname}
                        onChangeText={(e)=>setEditData({...EditData,lastname:e})}
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
                        value={EditData.email}
                        onChangeText={(e)=>setEditData({...EditData,email:e})}
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
                        value={EditData.address}
                        onChangeText={(e)=>setEditData({...EditData,address:e})}
                    />
                </Item>

                <Button
                    style={GLOBALSTYLE.themebtn}
                    mode="contained"
                    onPress={onSubmit}
                >
                    <Text style={{ color: 'white', fontSize: 14, textTransform: 'uppercase' }}>save details</Text>
                </Button>
            </View>
            </ScrollView>
        </View>
    )
}

export default connect(null,{ updateProfile})(EditProfile);

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