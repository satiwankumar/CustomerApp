import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './src/navigation/Tabs'


import {Home, JobDetails , PostedJobs, UserBookings ,UserProfile ,LoginScreen,SignUp,SignUp2,BookNow, VendorDetail,AllServices} from './src/screens'

const Stack = createStackNavigator();


const App = () => {
  return (

<NavigationContainer>
      <Stack.Navigator
      screenOptions = {{
        headerShown:false,
      }}
      initialRouteName={"LoginScreen"}
      >
         <Stack.Screen  name="LoginScreen" component={LoginScreen} ></Stack.Screen>
         <Stack.Screen  name="SignUp" component={SignUp} ></Stack.Screen>
         <Stack.Screen  name="SignUp2" component={SignUp2} ></Stack.Screen>
        <Stack.Screen  name="Home" component={Tabs} ></Stack.Screen>
        <Stack.Screen  name="AllServices" component={AllServices} ></Stack.Screen>
        <Stack.Screen  name="VendorDetail" component={VendorDetail} ></Stack.Screen>
        <Stack.Screen  name="BookNow" component={BookNow}></Stack.Screen>
        <Stack.Screen  name="UserBookings" component={UserBookings}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

