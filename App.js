import React from 'react';
import { NativeRouter } from "react-router-native";
import { StyleSheet, Text, View } from 'react-native';
import JoueurModel from "./models/JoueurModel";
import { Provider } from "mobx-react";
// import Menu from './components/Menu';
import Routing from './Routing';

const store = new JoueurModel();

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View>
        <Routing />
      </View>
    </NativeRouter>
  </Provider>
)

export default App;
