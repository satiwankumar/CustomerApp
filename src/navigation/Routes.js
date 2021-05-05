import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import { Home, ServiceProvider, JobDetails, PostedJobs,LocationAccess, SplashScreen, UserBookings, UserProfile,FindServices, LoginScreen, SignUp, SignUp2, BookNow, ForgotPassword, VendorDetail, AllServices, EditProfile, AllReviews } from '../screens'
const Stack = createStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer theme={DarkTheme} >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={"SplashScreen"}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} ></Stack.Screen>
                <Stack.Screen name="LoginScreen" component={LoginScreen} ></Stack.Screen>
                <Stack.Screen name="FindServices" component={FindServices} ></Stack.Screen>
                <Stack.Screen name="LocationAccess" component={LocationAccess} ></Stack.Screen>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUp} ></Stack.Screen>
                <Stack.Screen name="SignUp2" component={SignUp2} ></Stack.Screen>
                <Stack.Screen name="Home" component={Tabs} ></Stack.Screen>
                <Stack.Screen name="AllServices" component={AllServices} ></Stack.Screen>
                <Stack.Screen name="VendorDetail" component={VendorDetail} ></Stack.Screen>
                <Stack.Screen name="BookNow" component={BookNow}></Stack.Screen>
                <Stack.Screen name="UserBookings" component={UserBookings}></Stack.Screen>
                <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
                <Stack.Screen name="AllReviews" component={AllReviews}></Stack.Screen>
                <Stack.Screen name="ServiceProvider" component={ServiceProvider}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

