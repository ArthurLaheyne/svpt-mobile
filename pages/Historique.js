import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { StyleSheet, Text, View, ScrollView, Image, WebView } from 'react-native';

export default class Historique extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tournois: [],
      ready: false
    };
  }

  componentDidMount() {
    fetch('https://guarded-shelf-83545.herokuapp.com' + '/tournois')
    .then(res => res.json())
    .then(data => {
      this.setState({
        tournois : data.data,
        ready: true
      });
    });
  }

  render() {
    if (!this.state.ready) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <ScrollView style={{ marginBottom: 60, paddingBottom: 1}}>
        {this.state.tournois.slice(0).reverse().map((tournoi, i) => {
          return (
            <View key={tournoi.id}>
              <Text style={{ margin: 5}}>{tournoi.id}</Text>
            </View>
          )
        })}
        </ScrollView>
      )
    }
  }

}
