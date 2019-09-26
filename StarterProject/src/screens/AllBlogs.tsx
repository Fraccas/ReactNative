import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationScreenOptions, NavigationScreenProps } from 'react-navigation';

interface IHomeProps extends NavigationScreenProps { }
interface IHomeState {}

export default class AllBlogs extends React.Component<IHomeProps, IHomeState> {
  static navigationOptions: NavigationScreenOptions = {
    headerTitle: "Blogs"
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>All Blogs Screen</Text>
        <Button title="Go to Single Blog" onPress={() => this.props.navigation.navigate('SingleBlog')}/>
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
