import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyFlatList from './Components/MyFlatList'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <MyFlatList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
