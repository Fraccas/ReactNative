import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenOptions, NavigationScreenOptionsGetter } from 'react-navigation';

interface IHomeProps {}
interface IHomeState {}

export default class SingleBlog extends React.Component<IHomeProps, IHomeState> {

    static navigationOptions: NavigationScreenOptions = {
        headerTitle: "Single Blog"
    };

    render () {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Single Blogs Screen</Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 25,
    margin: 5,
    fontFamily: 'Cochin'
  }
});
