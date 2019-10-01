import * as React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationScreenOptions } from 'react-navigation';

interface Props extends NavigationStackScreenProps {}
interface State {
    blogTitle: string,
    blogContent: string
}

export default class AddBlog extends React.Component<Props, State> {
    static navigationOptions: NavigationScreenOptions = {
        headerTitle: "Blogs"
    };

    constructor(props: Props) {
        super(props);

        this.setState({
            blogTitle: '',
            blogContent: ''
        });
    }

    render () {
        return (
            <>
            </>
        )
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