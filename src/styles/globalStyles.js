import {StyleSheet} from 'react-native';
import {COLORS,FONTS,SIZES} from '../constants'

export const globalStyles = StyleSheet.create({
    screenbg:{
        backgroundColor: COLORS.black,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    paragraph:{
        color:COLORS.white,
    },
    themebtn:{
            marginTop: 20,
            width: 200,
            height: 50,
            backgroundColor: COLORS.black,
            borderColor:COLORS.secondry,
            borderWidth:2,
            alignSelf:'center',
            justifyContent:'center',
            borderRadius: 8,
    },
    sectionHead:{
        fontSize:SIZES.h2,
        color:COLORS.white,
        textTransform:'uppercase',
        fontWeight:'bold',
        marginVertical:15,
        marginHorizontal:10,
        letterSpacing:2
    }
})

export default globalStyles;