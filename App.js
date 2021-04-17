import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer,DarkTheme } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './src/navigation/Tabs'
import {Home,ServiceProvider, JobDetails , PostedJobs, UserBookings ,UserProfile ,LoginScreen,SignUp,SignUp2,BookNow,ForgotPassword, VendorDetail,AllServices,EditProfile, AllReviews} from './src/screens'
import { COLORS } from './src/constants';

const Stack = createStackNavigator();
// useEffect(() => {
//   setRootViewBackgroundColor('#ccc');
// });
const App = () => {
  return (

<NavigationContainer theme={DarkTheme} >
      <Stack.Navigator
      screenOptions = {{
        headerShown:false,
      }}
      initialRouteName={"LoginScreen"}
      >
         <Stack.Screen  name="LoginScreen" component={LoginScreen} ></Stack.Screen>
         <Stack.Screen  name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
         <Stack.Screen  name="SignUp" component={SignUp} ></Stack.Screen>
         <Stack.Screen  name="SignUp2" component={SignUp2} ></Stack.Screen>
        <Stack.Screen  name="Home" component={Tabs} ></Stack.Screen>
        <Stack.Screen  name="AllServices" component={AllServices} ></Stack.Screen>
        <Stack.Screen  name="VendorDetail" component={VendorDetail} ></Stack.Screen>
        <Stack.Screen  name="BookNow" component={BookNow}></Stack.Screen>
        <Stack.Screen  name="UserBookings" component={UserBookings}></Stack.Screen>
        <Stack.Screen  name="EditProfile" component={EditProfile}></Stack.Screen>
        <Stack.Screen  name="AllReviews" component={AllReviews}></Stack.Screen>
        <Stack.Screen  name="ServiceProvider" component={ServiceProvider}></Stack.Screen>
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

