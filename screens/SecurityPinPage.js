//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, Item} from 'native-base';
import CodeInput from 'react-native-code-input';
import {GrayTextComponent} from '../components/GrayTextComponent';
// create a component
class SecurityPinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reEnterPinVisible: false,
            authenticationPin1: ''
        }
    }
    authencationPin1Complete = (code) => {
        if (code !== '' && code.length === 4) {
            this.setState({reEnterPinVisible: true, authenticationPin1: code})
        } else {
            this.setState({reEnterPinVisible: false, authenticationPin1: ''})
        }
    }
    authencationPin2Complete = (code) => {
        if (this.state.authenticationPin1 === code) {
            this
                .props
                .navigation
                .navigate("Tabs")
        } else {
            this
                .refs
                .authenticationPin2
                .clear();
        }
    }
    render() {
        return (
            <Container style={{
                width: '100%'
            }}>
                <Content
                    style={{
                    paddingHorizontal: 30,
                    marginVertical: 20,
                    width: '100%'
                }}>
                    <View
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View
                            style={{
                            marginTop: 40
                        }}>
                            <GrayTextComponent text="Please enter 4-digit PIN which will"/>
                        </View>
                        <GrayTextComponent text="be used for authentication"/>
                    </View>
                    <View style={{
                        marginTop: 10
                    }}>
                        <CodeInput
                            ref="authenticationPin1"
                            codeLength={4}
                            inputPosition='center'
                            autoFocus={true}
                            secureTextEntry
                            activeColor='gray'
                            inactiveColor='green'
                            borderType={'underline'}
                            size={35}
                            onFulfill=
                            { (code) => this.authencationPin1Complete(code) }/>
                    </View>
                    {this.state.reEnterPinVisible
                        ? <View >
                            <View
                                style={{
                                marginTop: 15
                            }}>
                                <View
                                    style={{
                                    alignItems: 'center',
                                    marginTop: 15
                                }}>
                                    <GrayTextComponent text="Re-Type PIN:"/>
                                </View>
                            </View>
                            <CodeInput
                                ref="authenticationPin2"
                                codeLength={4}
                                inputPosition='center'
                                autoFocus={true}
                                secureTextEntry
                                activeColor='gray'
                                inactiveColor='green'
                                borderType={'underline'}
                                size={35}
                                onFulfill=
                                { (code) => this.authencationPin2Complete(code) }/></View>
                        :
                        <Text></Text>}
                </Content>
            </Container>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});
//make this component available to the app
export default SecurityPinPage;