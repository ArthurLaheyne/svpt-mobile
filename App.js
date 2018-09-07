import React from 'react';
import { NativeRouter } from "react-router-native";
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import JoueurModel from "./models/JoueurModel";
import { Provider } from "mobx-react";
import Menu from './pages/Menu';


const store = new JoueurModel();

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.general}>
        <Menu />
      </View>
    </NativeRouter>
  </Provider>
)

export default App;


const styles = StyleSheet.create({
  general: {
    backgroundColor: '#25c481',
    flex: 1,
  },
});
