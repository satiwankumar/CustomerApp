import React from "react";
import { Text, StyleSheet, ImageBackground, Image,ScrollView,StatusBar } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { COLORS, SIZES, TEXTSTYLES } from "../constants";
import { Container, Header, Content, Form, Item, Input, Button, View, Icon,TouchableOpacity } from 'native-base';
import Service from './components/Service'

import Vendor from './components/Vendor'
const AllServices = (props) => {
  const  passedRoute = props.route.params;
  console.log("ALLL TYPESSS",passedRoute.type)
  return (
    

   
    <Container style={styles.container}>
       <StatusBar translucent backgroundColor="transparent"/>
      <ScrollView>
      <Header searchBar rounded style={{backgroundColor:COLORS.primary,marginTop:50}}>
          <Item style={{backgroundColor:COLORS.black,height:50,borderRadius:8}}>
            <Icon name="ios-search" />
            <Input placeholder="Search Nearby" style={{color:COLORS.white}} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Text style={TEXTSTYLES.sectionHead}>View All {passedRoute.type}</Text>

    <View style={styles.servicePage} >
      {passedRoute.type === 'Vendors' ?
     <Vendor />:
     passedRoute.type === 'Services' ? 
     <Service /> :
     <Text></Text>
     }
        </View>

       

    </ScrollView>
    </Container>
    
  );
};

export default AllServices;

const styles = StyleSheet.create({
  container: {                
    backgroundColor: COLORS.primary,
  },
 

servicePage:{
flexWrap:'wrap',
display:'flex',
flexDirection:'row',
alignItems:'center',justifyContent:'center'
}

});
