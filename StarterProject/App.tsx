import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IHomeProps {}
interface IHomeState {}

export default class App extends React.Component<IHomeProps, IHomeState> {
  render () {
    return (
      <View style={styles.root}>
        <View style={styles.black}>
          <View style={styles.container}>
            <Text style={styles.text}>#crushingit</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 40,
    fontFamily: 'Cochin'
  },
  root: {
    flex: 1,
    backgroundColor: 'red', 
    padding: 20
  },
  black: {
    flex: 1,
    backgroundColor: 'black', 
    padding: 15
  }
});
