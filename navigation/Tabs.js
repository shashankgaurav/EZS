import Dashboard from '../screens/Dashboard';
import Vault from '../screens/Vault';
import Passwords from '../screens/Passwords';
import Monitor from '../screens/Monitor';
import Support from '../screens/Support';
import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Icon} from 'native-base'
import {Image} from "react-native";
import AlertList from '../screens/AlertList';
import AlertPage from '../screens/AlertPage';
import {AlertNavigation} from './AlertNavigation';

export const TabNavigation = createBottomTabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarIcon: () => <Image
                    source={require('../assets/images/dashboard.png')}
                    style={{
                    width: 20,
                    height: 20
                }}/>
        }
    },
    Vault: {
        screen: Vault,
        navigationOptions: {
            tabBarIcon: () => <Image
                    source={require('../assets/images/vault.png')}
                    style={{
                    width: 20,
                    height: 20
                }}/>
        }
    },
    Passwords: {
        screen: Passwords,
        navigationOptions: {
            tabBarIcon: () => <Image
                    source={require('../assets/images/passwords.png')}
                    style={{
                    width: 40,
                    height: 40
                }}/>
        }
    },
    Monitor: {
        screen: AlertNavigation,
        navigationOptions: {
            tabBarIcon: () => <Image
                    source={require('../assets/images/monitor.png')}
                    style={{
                    width: 20,
                    height: 20
                }}/>
        }
    },
    Support: {
        screen: Support,
        navigationOptions: {
            tabBarIcon: () => <Image
                    source={require('../assets/images/support.png')}
                    style={{
                    width: 20,
                    height: 20
                }}/>
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true
    },
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#f2f2f2',
        activeBackgroundColor: '#2ec4b6',
        inactiveTintColor: '#666',
        labelSize: {
            textAlign: 'center',
            paddingBottom: 7,
            marginBottom: 10
        }
    }
})
