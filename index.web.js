/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import {App} from './web/src/app';

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
})
