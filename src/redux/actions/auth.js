import api from '../utils/api'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE, INFO_UPDATED, INFO_ERROR } from './types'
import AsyncStorage from '@react-native-community/async-storage'
import setAuthToken from '../utils/setAuthToken'
import Toast from 'react-native-simple-toast';
import axios from 'axios';

// BEGIN: LOAD USER
export const loadUser = () => async dispatch => {
    try {
        console.log("LOAD USER CALLELLEDD")
        var userData = await AsyncStorage.getItem('@userData')
        var jsonData = JSON.parse(userData)
        console.log('LOADING USERRRRR',userData)
        dispatch({
            type: USER_LOADED,
            payload: jsonData
        })

    } catch (err) {
        console.log(err)
    }
}
// END: LOAD USER

// BEGIN: REGISTER USER
export const register = (formData,navigation) => async dispatch => {
    try {
        
        const res = await api.post('/users/signup', formData)
        console.log("register called",res.data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        console.log("register called")

        dispatch(loadUser())
        Toast.show("Registered Successfully", Toast.SHORT)
    } catch (err) {
        console.log(err.response.data)
        const errors = err.response.data.errors
        if (errors) {
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        }
        dispatch({
            type: REGISTER_FAIL
        })
        
    }
}
// END: REGISTER USER

// BEGIN: LOGIN
export const login = (formData, navigation) => async dispatch => {
    try {
        console.log("FOEM DATATT", formData)
        const res = await api.post('/auth/login/admin', formData)
        console.log("login success", res.data)
        // AsyncStorage.setItem('token',JSON.stringify(res.data.token))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        Toast.show(res.data.message, Toast.SHORT)
        dispatch(loadUser())
    
        navigation.navigate('FindServices')

    } catch (err) {
        console.log("MASLLALALLAL", err);
        Toast.show('Incorrect ID or Password', Toast.SHORT)
        const errors = err.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(error.msg, 'danger'))
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}
// END: LOGIN

// BEGIN: LOGOUT
export const logout = () => dispatch => {
    Toast.show("Logged Out Successfully", Toast.SHORT)
    dispatch({
        type: LOGOUT
    })
}
// END: LOGOUT