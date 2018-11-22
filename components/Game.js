import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, TouchableOpac} from 'react-native';
import ChessBoard from './ChessBoard';

export default class Game extends Component<Props>
 {
  render()
   {
    return (
      <ChessBoard></ChessBoard>
    );
  }
}