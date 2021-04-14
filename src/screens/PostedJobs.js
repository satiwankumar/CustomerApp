import React from 'react';
import { Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import {  COLORS, SIZES,TEXTSTYLES  } from '../constants'
import { Container, Header, Content, Accordion, Form, Item, Input, Button, View, Icon, TouchableOpacity, Card, CardItem, Body } from 'native-base';



const PostedJobs = () => {

  return (
    <Container style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>

        <Header searchBar rounded style={{ backgroundColor: COLORS.primary, marginTop: 40 }}>
          <Item style={{ backgroundColor: COLORS.black, height: 50, borderRadius: 8 }}>
            <Icon name="ios-search" />
            <Input placeholder="Find Job" style={{ color: COLORS.white }} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Text style={TEXTSTYLES.sectionHead}>Let employers find you</Text>
        <View>
          <Card style={{ backgroundColor: '#000', borderRadius: 5 }}>
            <CardItem style={{ backgroundColor: COLORS.transparent }}>
              <Body>
                <Text style={{ color: COLORS.white, textTransform: 'uppercase', fontSize: 17 }}>
                  Front Desk Receptionist
                </Text>
                <Text style={{ color: COLORS.white, marginBottom: 10 }}>Dulce Day Spa & Salon - Beauty Salon New Windsor, NY</Text>
                <Text style={{ color: COLORS.lightGray }}>
                  Roosters Men's Grooming Center | Avocet Corp
                  Colorado Springs, CO 80907 (Northwest Colorado Springs area)
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, width: 100, justifyContent: 'center', marginRight: 10, paddingHorizontal: 20, height: 35 }}  >
                    <Text style={{ color: COLORS.white }}>View</Text>
                  </Button>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, height: 35, paddingHorizontal: 20, paddingVertical: 6 }}  >
                    <Text style={{ color: COLORS.white }}>Apply Now</Text>
                  </Button>
                </View>

              </Body>
            </CardItem>
          </Card>

          <Card style={{ backgroundColor: '#000', borderRadius: 5 }}>
            <CardItem style={{ backgroundColor: COLORS.transparent }}>
              <Body>
                <Text style={{ color: COLORS.white, textTransform: 'uppercase', fontSize: 17 }}>
                  Proffessional Barber
                </Text>
                <Text style={{ color: COLORS.white, marginBottom: 10 }}>Dulce Day Spa & Salon - Beauty Salon New Windsor, NY</Text>
                <Text style={{ color: COLORS.lightGray }}>
                  Roosters Men's Grooming Center | Avocet Corp
                  Colorado Springs, CO 80907 (Northwest Colorado Springs area)
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, width: 100, justifyContent: 'center', marginRight: 10, paddingHorizontal: 20, height: 35 }}  >
                    <Text style={{ color: COLORS.white }}>View</Text>
                  </Button>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, height: 35, paddingHorizontal: 20, paddingVertical: 6 }}  >
                    <Text style={{ color: COLORS.white }}>Apply Now</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card style={{ backgroundColor: '#000', borderRadius: 5 }}>
            <CardItem style={{ backgroundColor: COLORS.transparent }}>
              <Body>
                <Text style={{ color: COLORS.white, textTransform: 'uppercase', fontSize: 17 }}>
                  Hair Stylist
                </Text>
                <Text style={{ color: COLORS.white, marginBottom: 10 }}>Dulce Day Spa & Salon - Beauty Salon New Windsor, NY</Text>
                <Text style={{ color: COLORS.lightGray }}>
                  Roosters Men's Grooming Center | Avocet Corp
                  Colorado Springs, CO 80907 (Northwest Colorado Springs area)
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, width: 100, justifyContent: 'center', marginRight: 10, paddingHorizontal: 20, height: 35 }}  >
                    <Text style={{ color: COLORS.white }}>View</Text>
                  </Button>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, height: 35, paddingHorizontal: 20, paddingVertical: 6 }}  >
                    <Text style={{ color: COLORS.white }}>Apply Now</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ backgroundColor: '#000', borderRadius: 5 }}>
            <CardItem style={{ backgroundColor: COLORS.transparent }}>
              <Body>
                <Text style={{ color: COLORS.white, textTransform: 'uppercase', fontSize: 17 }}>
                  Account Manager
                </Text>
                <Text style={{ color: COLORS.white, marginBottom: 10 }}>Dulce Day Spa & Salon - Beauty Salon New Windsor, NY</Text>
                <Text style={{ color: COLORS.lightGray }}>
                  Roosters Men's Grooming Center | Avocet Corp
                  Colorado Springs, CO 80907 (Northwest Colorado Springs area)
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, width: 100, justifyContent: 'center', marginRight: 10, paddingHorizontal: 20, height: 35 }}  >
                    <Text style={{ color: COLORS.white }}>View</Text>
                  </Button>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, height: 35, paddingHorizontal: 20, paddingVertical: 6 }}  >
                    <Text style={{ color: COLORS.white }}>Apply Now</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card style={{ backgroundColor: '#000', borderRadius: 5 }}>
            <CardItem style={{ backgroundColor: COLORS.transparent }}>
              <Body>
                <Text style={{ color: COLORS.white, textTransform: 'uppercase', fontSize: 17 }}>
                  Front Desk Receptionist
                </Text>
                <Text style={{ color: COLORS.white, marginBottom: 10 }}>Dulce Day Spa & Salon - Beauty Salon New Windsor, NY</Text>
                <Text style={{ color: COLORS.lightGray }}>
                  Roosters Men's Grooming Center | Avocet Corp
                  Colorado Springs, CO 80907 (Northwest Colorado Springs area)
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, width: 100, justifyContent: 'center', marginRight: 10, paddingHorizontal: 20, height: 35 }}  >
                    <Text style={{ color: COLORS.white }}>View</Text>
                  </Button>
                  <Button style={{ backgroundColor: "#000", borderColor: COLORS.secondry, borderWidth: 1, marginVertical: 15, height: 35, paddingHorizontal: 20, paddingVertical: 6 }}  >
                    <Text style={{ color: COLORS.white }}>Apply Now</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

      </ScrollView>
    </Container>
  )
}

export default PostedJobs;

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