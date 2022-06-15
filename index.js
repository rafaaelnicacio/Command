/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import './ReactotronConfig';
import {name as appName} from './app.json';
if (__DEV__) {
  require('react-devtools');
  console.log('reactotron');
}
AppRegistry.registerComponent(appName, () => App);
