import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import LoginPage from '../screens/LoginPage';
import SecurityPinPage from '../screens/SecurityPinPage';
import {TabNavigation} from './Tabs';
import CreditCardForm from '../screens/CreditCardForm';

export const StackNavigation = createStackNavigator({
    LoginPage: {
        screen: LoginPage
    },
    SecurityPinPage: {
        screen: SecurityPinPage
    },
    CreditCardForm: {
        screen: CreditCardForm
    },
    Tabs: {
        screen: TabNavigation
    }
}, {
    initialRouteName: 'Tabs',
    headerMode: 'none'
});
