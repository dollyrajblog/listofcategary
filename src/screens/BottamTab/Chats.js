import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Chats = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Chats</Text>
    </View>
  );
};

export default Chats;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#d4153b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {fontSize: 20, fontWeight: 'bold', color: '#000'},
});
