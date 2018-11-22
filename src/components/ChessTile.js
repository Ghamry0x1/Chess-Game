import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

export default class ChessTile extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          width: this.props.width,
          height: this.props.height,
          borderWidth: 0.5,
          borderColor: "#000000"
        }}
      />
    );
  }
}

ChessTile.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
