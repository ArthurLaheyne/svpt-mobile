import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'

import Historique from './Historique';

const Menu = () => (
  <NativeRouter>
    <View>
      <View style={{marginTop: 24, height: 40, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Link
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            to="/"
            underlayColor='#f0f4f7'>
              <Text style={{color: 'white'}}>Histo</Text>
          </Link>
        </View>
        <View style={{flex: 1}}>
          <Link
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            to="/home2"
            underlayColor='#f0f4f7'>
              <Text style={{color: 'white'}}>Home2</Text>
          </Link>
        </View>
        <View style={{flex: 1}}>
          <Link
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            to="/home3"
            underlayColor='#f0f4f7'>
              <Text style={{color: 'white'}}>Home3</Text>
          </Link>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
          <Link
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            to="/"
            underlayColor='#f0f4f7'>
              <Text style={{color: 'white'}}>Log</Text>
          </Link>
        </View>
      </View>
      <Route exact path="/" component={Historique}/>
      <Route exact path="/home2" component={Historique}/>
      <Route exact path="/home3" component={Historique}/>
    </View>
  </NativeRouter>
);

export default Menu;
