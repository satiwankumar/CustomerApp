import {combineReducers} from 'redux'
import auth from './auth'
import services from './services'


export default combineReducers({
    auth,
    services
  
})