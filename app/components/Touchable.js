import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

export const Touchable = props => (
  <TouchableHighlight
    style={[styles.wrapper, props.styles]}
    {...props}>
    <View>
      {props.children}
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'lightcoral',
    padding: 20,
    borderRadius: 3,
  },
  text: {
    color: '#FFF',
  },
});
