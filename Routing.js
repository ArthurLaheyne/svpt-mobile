import React from 'react';
import { Route } from "react-router-dom";
import { StyleSheet, Text, View } from 'react-native';

// import Stats from './pages/Stats';
// import Historique from './pages/Historique';
import Home from './pages/Home';
// import GiphyNewPost from './pages/GiphyNewPost';
// import TournoiPost from './pages/TournoiPost';
// import Home2 from './pages/Home2';

const Routing = () => (
  <View>
    <Route exact path="/" component={Home} />
  </View>
);

export default Routing;
