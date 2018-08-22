import React from 'react';
import { StyleSheet, Text, View, Image, WebView } from 'react-native';

const News = (props) => (
  <View>
    <Text>{props.news.author}</Text>
    <Text>{props.news.publishedAt}</Text>
    {props.news.data.map((data, i) => {
      {(() => {
        switch (data.type) {
          case "gif":   return <Image source={{uri: data.content}} />;
          case "green": return "#00FF00";
          case "blue":  return "#0000FF";
          default:      return <Text>{data.content}</Text>;
        }
      })()}
    })}
  </View>
)

export default News;
