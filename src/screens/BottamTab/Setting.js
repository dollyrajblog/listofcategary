import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Setting</Text>
    </View>
  )
}

export default Setting
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#4f65c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {fontSize: 20, fontWeight: 'bold', color: '#000'},
});