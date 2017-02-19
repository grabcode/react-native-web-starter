/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Touchable } from '../../components';

export default class App extends Component {
  constructor() {
    super();
    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    console.log("Can't touched this?");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/react-native-web.png')}
          style={styles.logo}
        />
        <Touchable
          onPress={this._handlePress}
          style={styles.touchable}>
          <Text style={styles.welcome}>
            Welcome to React Native for Web Starter!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.web.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Alt+Cmd+I for dev menu
          </Text>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
});
