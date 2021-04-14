import React from "react";
import { Text, StyleSheet, ImageBackground, Image,ScrollView,StatusBar } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { COLORS, SIZES, TEXTSTYLES } from "../constants";
import { Container, Header, Content, Form, Item, Input, Button, View, Icon,TouchableOpacity } from 'native-base';
import Service from './components/Service'


const AllServices = (props) => {
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

        <Text style={TEXTSTYLES.sectionHead}>All Services</Text>

    <View style={styles.servicePage} >
    <Service
                imageUri={require("../assets/images/service1.png")}
                serviceTitle="Grooming"
                navigation={props.navigation}
              />
              <Service
                imageUri={require("../assets/images/service2.png")}
                serviceTitle="HairCut/Trim"
                navigation={props.navigation}
              />
           <Service 
          imageUri={require("../assets/images/service3.png")}
          serviceTitle="Men's Facial"
          navigation={props.navigation}
          />
           <Service 
          imageUri={require("../assets/images/service1.png")}
          serviceTitle="Grooming"
          style={styles.shu}
          />

<Service 
          imageUri={require("../assets/images/service2.png")}
          serviceTitle="Haircut/Trim"
          />
           <Service 
          imageUri={require("../assets/images/service3.png")}
          serviceTitle="Men's Facial"
          />
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
}
});
