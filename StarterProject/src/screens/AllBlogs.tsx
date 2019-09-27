import * as React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationScreenOptions } from 'react-navigation';
import { json } from '../utils/api';
import BlogPreviewCard from '../components/BlogPreviewCard';

interface IHomeProps extends NavigationStackScreenProps { }
interface IHomeState {
  blogs: {
    id: number,
    title: string,
    content: string,
    authorid: string,
    _created: Date
  }[];
}

export default class AllBlogs extends React.Component<IHomeProps, IHomeState> {
  static navigationOptions: NavigationScreenOptions = {
    headerTitle: "Blogs"
  };

  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  async componentDidMount() {
    try {
      let blogs = await json('https://afternoon-basin-48933.herokuapp.com/api/blogs'); 
      this.setState({blogs})
    } catch (e) {
      console.log(e);
      Alert.alert("Error on front end api request!");
    }
  }

  renderBlogs() {
    return this.state.blogs.map(blog => {
      return <BlogPreviewCard key={blog.id} blog={blog}/>
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>All Blogs Screen</Text>
          <ScrollView>
            {this.renderBlogs()}
          </ScrollView>
        
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
