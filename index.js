import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log(
      'Notification caused app to open from background state',
      remoteMessage.notification,
    );
  });

AppRegistry.registerComponent(appName, () => App);
