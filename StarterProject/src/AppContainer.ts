import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AllBlogs  from './screens/AllBlogs';
import SingleBlog from './screens/SingleBlog';
import Login from './screens/Login';

const AppNavigator = createStackNavigator({
    // screens
    Login,
    AllBlogs,
    SingleBlog
}, {
    // generic styling
    initialRouteName: 'Login',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#43005B'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
});

export default createAppContainer(AppNavigator);