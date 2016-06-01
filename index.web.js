/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import { AppRegistry } from 'react-native';
import { App } from './app/components/App';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
})
