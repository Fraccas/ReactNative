import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { NavigationScreenOptions } from 'react-navigation';
import { json } from '../utils/api';

interface Props {}
interface State {
    email: string,
    password: string
}

export default class Login extends React.Component<Props, State> {
    static navigationOptions: NavigationScreenOptions = {
        headerTitle: "Login"
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    async handleLogin () {
        try {
            let result = await json('https://afternoon-basin-48933.herokuapp.com/auth/login', 'POST', {
                email: this.state.email,
                password: this.state.password
            });

            console.log(result);
        } catch(e) {
            console.log(e);
            Alert.alert("Problem logging in? Contact your admin!");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Input 
                        textContentType="emailAddress"
                        containerStyle={{marginVertical: 15}}
                        leftIcon={{type: 'font-awesome', name: 'envelope'}}
                        placeholder=" Email..."
                        value={this.state.email}
                        onChangeText={(text) => this.setState({email: text})}
                    />
                    <Input 
                        containerStyle={{marginVertical: 15}}
                        secureTextEntry={true}
                        textContentType="password"
                        leftIcon={{type: 'font-awesome', name: 'key'}}
                        placeholder=" Password..."
                        value={this.state.password}
                        onChangeText={(text) => this.setState({password: text})}
                    />
                </View>
                <View style={{flex:1}}>
                    <Button 
                    raised
                    title="Login"
                    containerStyle={{margin: 10}}
                    buttonStyle={{backgroundColor: '#AE3CD7'}}
                    onPress={() => this.handleLogin()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      textAlign: 'center',
      padding: 15,
      borderWidth: 2,
      borderColor: '#000',
      borderStyle: 'solid'
    }
  });