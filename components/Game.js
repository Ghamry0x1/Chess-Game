import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';

export default class Game extends Component<Props> {
  render() {
    return (
      <ImageBackground
        source={require('../assets/board.png')}
        style={styles.container}>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});