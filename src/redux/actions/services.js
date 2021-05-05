import api from '../utils/api'
import {GET_SERVICES,SERVICES_ERROR} from './types'


// Get all profiles
export const getServices = () => async dispatch => {
    try {
    const res = await api.get('/services')
      console.log('Service ka action')
      dispatch({
        type: GET_SERVICES,
        payload: res.data
      });
      console.log("servicessssssssssssss",res.data);
    } catch (err) {
      console.log(err)
      console.log(err)
      dispatch({
        type: SERVICES_ERROR,
        payload:err
        
      });
    }
  };


  