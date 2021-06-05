import api from '../utils/api'
import {GET_PROFILE,UPDATE_PROFILE,PROFILE_ERROR} from './types'
import { loadUser } from '../actions/auth'
import Toast from 'react-native-simple-toast';

// Get Current profiles
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await api.get('/users/me');
        console.log("USER PROFILLE",res)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch (err) {
        console.log("errorProfile", err)
        dispatch({
            type: PROFILE_ERROR,
            
        });
    }
};

export const updateProfile = (EditData) => async dispatch => {
    // const body = { firstname, lastname,address };

    try {

console.log('Editt DATA KY ACTION',EditData)
        const res = await api.put('/users/edit', EditData)
        console.log("UPDATE PROFILLE",res.data)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })
        Toast.show("Information Updated Successfully!", Toast.SHORT)
        console.log('Updatedddd')


        dispatch(loadUser());
       
    } catch (err) {

        const errors = err.response.data.errors;
        console.log(errors)
        if (errors) {
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        }

    }
}

  