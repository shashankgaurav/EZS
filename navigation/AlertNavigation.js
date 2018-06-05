import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import AlertList from '../screens/AlertList';
import AlertPage from '../screens/AlertPage';

export const AlertNavigation = createStackNavigator({
    AlertList: {
        screen: AlertList
    },
    AlertPage: {
        screen: AlertPage
    }
}, {
    initialRouteName: 'AlertList',
    headerMode: 'none'

});


