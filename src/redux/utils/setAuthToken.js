import AsyncStorage from '@react-native-community/async-storage';
import api from '../utils/api';
const setAuthToken = (token) => {
  if (token) {
    // console.log("SetAuthTokenCalled")
    // console.log(token)
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    AsyncStorage.setItem('token', token);
    // AsyncStorage.setItem('isAdmin', isAdmin);
    
    // console.log("SetAuthTokenCalled",jwt_decode(token))
      
    
  } else {
    delete api.defaults.headers.common['Authorization'];
    // localStorage.removeItem('isAdmin');
    
  }
};

export default setAuthToken;