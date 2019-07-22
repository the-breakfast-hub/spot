import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Inbox extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FFFFFF'
    },
    headerTintColor: '#A89898'
  };

  render() {
    return (
      <View style={styles.main}>
        <Text>Inbox</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});
