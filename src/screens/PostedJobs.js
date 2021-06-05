import React,{useEffect,useState} from 'react';
import { Text, StyleSheet, ScrollView, StatusBar,ActivityIndicator } from 'react-native';
import {  COLORS, SIZES,TEXTSTYLES  } from '../constants'
import { Container, Header, Content, Accordion, Form, Item, Input, Button, View, Icon, TouchableOpacity, Card, CardItem, Body } from 'native-base';
import {getJobs} from '../redux/actions/services'
import {connect} from 'react-redux'

const PostedJobs = ({navigation,getJobs,Jobs:{Jobs,loading}}) => {
  const [keyword,setKeyword] = useState('')
console.log('Keyywordd ayaya',keyword)
  useEffect (() =>{
    getJobs(keyword)
},[getJobs,keyword])
console.log("LOAD",Jobs)
  return (
    <Container style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header searchBar rounded style={{ backgroundColor: COLORS.primary, marginTop: 40 }}>
          <Item style={{ backgroundColor: COLORS.black, height: 50, borderRadius: 8 }}>
            <Icon name="ios-search" />
            <Input placeholder="Find Job" style={{ color: COLORS.white }}
            value={keyword}
            onChangeText={(e)=>setKeyword(e)}
             />
             <Button style={{backgroundColor:COLORS.transparent,elevation:0}} onPress={() => setKeyword('')}>
             <Icon style={{color:COLORS.lightGray}}  name="close-sharp"></Icon>
             </Button>
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      <ScrollView>

       
        <Text style={TEXTSTYLES.sectionHead}>Let employers find you</Text>
        {loading == false ? 
        (
          <View>
           <Text style={{color:COLORS.white}}>kxk</Text>

          { Jobs && Object.keys(Jobs).length>0?
            Jobs.data.map((item,index)=>(
              <Card  key={item._id} style={{ backgroundColor: '#000', borderRadius: 5 }}>
            <CardItem style={{ backgroundColor: COLORS.transparent }}>
              <Body>
                <Text style={{ color: COLORS.white, textTransform: 'uppercase', fontSize: 17 }}>
                  {item.name}
                </Text>
                <Text style={{ color: COLORS.white, marginBottom: 10 }}>{item.shop.title} - Beauty Salon New Windsor, NY</Text>
                <Text style={{ color: COLORS.lightGray }}>
                 {item.description}
                </Text>
                  <Button   onPress={() => navigation.navigate('JobDetails',{item:item})} style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, height: 35, paddingHorizontal: 20, paddingVertical: 6 }}  >
                    <Text style={{ color: COLORS.white }}>Apply Now</Text>
                  </Button>

              </Body>
            </CardItem>
          </Card>
              )): 
              <Text></Text>
             }
          

        
        </View>
        ):  <ActivityIndicator size="large" color={COLORS.secondry} style={{marginTop:120}}/>
        }
        

      </ScrollView>
    </Container>
  )
}

const mapStateToProps = state => ({
  Jobs: state.services
  
} )

// export default Service;
export default connect(mapStateToProps,{getJobs})(PostedJobs);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  jobBox: {
    backgroundColor: COLORS.black
  },
  searchbar: {
    width: '95%',
    alignSelf: 'center',
  }

});