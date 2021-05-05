import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { Text, StyleSheet, Image, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import Routes from './src/navigation/Routes'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>


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

