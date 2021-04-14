import React from 'react';
import { Text, StyleSheet, Image,StatusBar,TouchableOpacity,ScrollView ,ImageBackground} from 'react-native';
import { Container, Header, Content,Card,CardItem,Body,FooterTab, Form, Item, Input,Icon, Button, View, Label } from 'native-base';
import { COLORS, SIZES } from "../constants";
import Vendor from './components/Vendor'
import Service from './components/Service'
import globalStyles from '../styles/globalStyles';

const UserProfile = () => {
    return(
        <Container style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
        <ScrollView>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <Text style={globalStyles.sectionHead}>my Bookings</Text>
    </View>

    <Card style={{backgroundColor:'#000',borderRadius:5}}>
            <CardItem style={{backgroundColor:COLORS.transparent}}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <View>
                  <Text style={{color:COLORS.white,textTransform:'uppercase',fontSize:17}}>
               Trim
                </Text>
                <Text style={{color:COLORS.white,marginBottom:2}}>By Venille Salons and Spa</Text>
                <Text style={{color:COLORS.white,marginBottom:10}}>12 March 2020 (4:00 PM)</Text>
                  </View>
               
                <Text style={{color:COLORS.secondry,fontSize:20}}>
               $30
                </Text>
               
              </Body>
            </CardItem>
          </Card>
          <Card style={{backgroundColor:'#000',borderRadius:5}}>
            <CardItem style={{backgroundColor:COLORS.transparent}}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <View>
                  <Text style={{color:COLORS.white,textTransform:'uppercase',fontSize:17}}>
               cleansing
                </Text>
                <Text style={{color:COLORS.white,marginBottom:2}}>By Venille Salons and Spa</Text>
                <Text style={{color:COLORS.white,marginBottom:10}}>12 March 2020 (4:00 PM)</Text>
                  </View>
               
                <Text style={{color:COLORS.secondry,fontSize:20}}>
               $30
                </Text>
               
              </Body>
            </CardItem>
          </Card>
          <Card style={{backgroundColor:'#000',borderRadius:5}}>
            <CardItem style={{backgroundColor:COLORS.transparent}}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <View>
                  <Text style={{color:COLORS.white,textTransform:'uppercase',fontSize:17}}>
               Hair Styling
                </Text>
                <Text style={{color:COLORS.white,marginBottom:2}}>By Venille Salons and Spa</Text>
                <Text style={{color:COLORS.white,marginBottom:10}}>12 March 2020 (4:00 PM)</Text>
                  </View>
               
                <Text style={{color:COLORS.secondry,fontSize:20}}>
               $30
                </Text>
               
              </Body>
            </CardItem>
          </Card>
            </ScrollView>
            </Container>
    )
}

export default UserProfile;
const styles = StyleSheet.create({
    container: {                
      backgroundColor: COLORS.primary,
    },
})