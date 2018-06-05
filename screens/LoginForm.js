//import liraries
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableHighlight
} from 'react-native';
import {
    Container,
    Content,
    Body,
    Label,
    Input,
    Item,
    Form,
    InputGroup,
    Left,
    Button
} from 'native-base';
import {GrayTextComponent} from '../components/GrayTextComponent';
import {LoginFormStyle as style} from '../styles/style';
import validator from 'validator';


// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailErrorMessage:'',
            isValidEmailAddress:false,
            isValidPassword:false,
            passwordErrorMessage:'',
            email:'',
            password:''
        }
    }

    onPress = () => {
        alert('Password Forgotten');
    }

    onLogin = () => {
        if(this.state.email === 'advait.deshpande@extentia.com' && this.state.password === '12345'){
        console.log(this.props.navigationProps.navigation.navigate);
        this.props.navigationProps.navigation.navigate("SecurityPinPage");
// this.props.navigationProps.navigate("SecurityPinPage");
        } else {}
    }

    validateEmailAddress = (emailAddress) => {
        if(validator.isEmail(emailAddress) && emailAddress !== ''){
                this.setState({
                    isValidEmailAddress : true,
                    emailErrorMessage:'',
                    email:emailAddress
                })
        } else {
            this.setState({
                isValidEmailAddress: false,
                emailErrorMessage:'Please Enter Valid Email Address',
                email:''
            })
        }
    }

    validatePassword = (password) => {
        if(password !== '' && password.length >= 4){
            this.setState({
                passwordErrorMessage:'',
                isValidPassword:true,
                password:password
            });
        }else{
            this.setState({
                passwordErrorMessage:'Please Enter Valid Password',
                isValidPassword:false,
                password:''
            })}
    }

    render() {
        return (
            <Container style={{
                width: '100%'
            }}>
                <View
                    style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginTop: 40
                    }}><GrayTextComponent text="Please enter your"/></View>
                    <GrayTextComponent text="EZShield information"/>
                </View>
                <Content style={style.container}>
                    <View
                        style={{
                        marginVertical: 12,
                        width: '100%'
                    }}>
                        <Label
                            style={{
                            fontSize: 12,
                            textAlign: 'left',
                            marginVertical: 7
                        }}>Email Address</Label>
                        <TextInput
                            style={{
                            fontSize: 12,
                            padding: 7,
                            width: '100%'
                        }}
                            multiline={false}
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onChangeText={emailAddress => this.validateEmailAddress(emailAddress)}
                            keyboardType={Platform.OS === 'android'
                            ? 'email-address'
                            : 'default'}
                            />
                        <Label 
                            style={{
                            fontSize: 12,
                            marginVertical: 7,
                            textAlign: 'left',
                            marginTop: 10
                        }}>Password</Label>
                        <TextInput
                            style={{
                            fontSize: 12,
                            padding: 7,
                            fontWeight:'100'
                        }}
                            multiline={false}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            secureTextEntry
                            returnKeyType="go"
                            onChangeText={password => this.validatePassword(password)}/>
                    </View>
                    <View
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableHighlight
                            onPress={this.onPress}
                            activeOpacity={0}
                            underlayColor="white"><GrayTextComponent text="Forgot Password?"/></TouchableHighlight>
                    </View>
                    <View
                        style={{
                        marginTop: 30,
                        // alignSelf: 'center'
                    }}>
                        <Button
                            onPress={this.onLogin}
                            style={{
                            // height: '45%',
                            width: '100%',
                            justifyContent: 'center',
                            alignContent:'center',
                            backgroundColor:'#2c3e50'
                        }}>
                            <Text style={{color:'white',fontWeight:'bold'}}>Login</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

//make this component available to the app
export default LoginForm;