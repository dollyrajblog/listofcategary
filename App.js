import {View} from 'react-native';
import React, {useEffect} from 'react';
import Multiselect from './src/screens/Multiselect';
import {
  NotificationListner,
  requestUserPermission,
} from './src/utils/PushNotification_helper';
import Route from './src/Route/Route';
const App = () => {
  useEffect(() => {
    requestUserPermission(), NotificationListner();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Route />
      {/* <Multiselect />*/}
    </View>
  );
};

export default App;
