import {combineReducers} from 'redux'
import auth from './auth'
import services from './services'
import profile from './profile'
import shops from './shops'

export default combineReducers({
    auth,
    services,
    profile,
    shops,
  
})