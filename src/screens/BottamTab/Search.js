import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>Search</Text>
    </View>
  )
}

export default Search
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#3e9e69',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {fontSize: 20, fontWeight: 'bold', color: '#000'},
});