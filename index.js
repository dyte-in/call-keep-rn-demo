/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import bgMessaging from './src/util/bgMessaging'
import messaging from '@react-native-firebase/messaging';
import { registerGlobals } from 'react-native-webrtc';

registerGlobals();
AppRegistry.registerComponent(appName, () => App);

messaging().setBackgroundMessageHandler(bgMessaging);

AppRegistry.registerHeadlessTask(
    'RNCallKeepBackgroundMessage',
    () => ({ name, callUUID, handle }) => {
      // Make your call here
      Promise.resolve()
    }
);
  