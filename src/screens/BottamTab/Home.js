import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Home</Text>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {fontSize: 20, fontWeight: 'bold', color: '#000'},
});
