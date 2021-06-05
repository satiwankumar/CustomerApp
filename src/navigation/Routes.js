import 'react-native-gesture-handler';
import React, { useState, useEffect,useSelector } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import { Home,ResetCode, ServiceProvider, JobDetails, PostedJobs,LocationAccess, SplashScreen, UserBookings, UserProfile,FindServices, LoginScreen, SignUp, SignUp2, BookNow, ForgotPassword, VendorDetail, ViewAll, EditProfile, AllReviews, ResetPassword } from '../screens'
const Stack = createStackNavigator();
// let isAuthenticated=useSelector(state=>state.auth.user);

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
                <Stack.Screen name="ViewAll" component={ViewAll} ></Stack.Screen>
                <Stack.Screen name="VendorDetail" component={VendorDetail} ></Stack.Screen>
                <Stack.Screen name="BookNow" component={BookNow}></Stack.Screen>
                <Stack.Screen name="PostedJobs" component={PostedJobs}></Stack.Screen>
                <Stack.Screen name="JobDetails" component={JobDetails}></Stack.Screen>
                <Stack.Screen name="UserBookings" component={UserBookings}></Stack.Screen>
                <Stack.Screen name="UserProfile" component={UserProfile} ></Stack.Screen>
                <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
                <Stack.Screen name="ResetCode" component={ResetCode}></Stack.Screen>
                <Stack.Screen name="ResetPassword" component={ResetPassword}></Stack.Screen>
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

