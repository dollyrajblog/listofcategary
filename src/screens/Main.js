import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import { UserContext } from '../../App';

const Main = () => {
const user = useContext(UserContext);
  console.log(user, '===>');
  return (
    <View>
      <Text>Main</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
