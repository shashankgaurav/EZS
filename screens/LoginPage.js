//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import LoginForm from './LoginForm';
import {GrayTextComponent} from '../components/GrayTextComponent';

// create a component
class LoginPage extends Component {
    onPress = () => {
        alert('Register Now!');
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginForm navigationProps={this.props}/>
                <View
                    style={{
                    alignSelf: 'center',
                    flex: 0.5
                }}>
                    <GrayTextComponent text="Don't have an account?"/>
                    <View>
                        <TouchableHighlight
                            onPress={this.onPress}
                            activeOpacity={0}
                            underlayColor="white">
                            <Text
                                style={{
                                color: '#2980b9',
                                fontSize: 11,
                                alignSelf: 'center',
                                marginTop: 10
                            }}>
                                Register Now!
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
        /*  justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2c3e50' */
    }
});

//make this component available to the app
export default LoginPage;
