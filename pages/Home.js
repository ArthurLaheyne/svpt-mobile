import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { StyleSheet, Text, View, Image, WebView } from 'react-native';

import News from '../components/News';

// import '../css/Home.css';
import loader from '../images/Blocks-0.5s-40px.gif';

const Home = inject("store")(observer(class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      giphynews: [],
      ready: false
    };
  }

  componentDidMount() {
    this.props.store.refreshJoueur();
    fetch('https://guarded-shelf-83545.herokuapp.com/giphynews')
      .then(res => res.json())
      .then(res => {
        this.setState({
          giphynews: res.data,
          ready: true
        })
      });
  }

  render() {
    if (!this.state.ready) {
      return (
        <View className="total-center">
          <Image
            source={loader}
            alt="loading"
          />
        </View>
      )
    } else {
      let giphynews = [];
      this.state.giphynews.forEach((giphynew, key) => {
        console.log(giphynew);
        let element = (
          <News news={giphynew} />
        );
        giphynews.push(element);
      });

      return (
        <View id="home">
          { giphynews }
        </View>
      );
    }
  }
}))

export default Home;
