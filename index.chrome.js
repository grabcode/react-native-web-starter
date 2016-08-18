/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import { AppRegistry } from 'react-native';
import { App } from './app/components/App';

AppRegistry.registerComponent('boiler', () => App);
AppRegistry.runApplication('boiler', {
    rootTag: document.getElementById('react-root')
})
