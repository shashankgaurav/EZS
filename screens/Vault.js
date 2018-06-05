//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import {
    Container,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Body,
    List,
    ListItem,
    Tabs,
    Tab,
    TabHeading,
    Title,
    Text,
    ScrollableTab
} from 'native-base';
import NewAlerts from './NewAlerts';
import OpenCases from './OpenCases';
import {Overlay} from 'react-native-elements';
import OverlaySecondScreen from './OverlaySecondScreen';
import ImagesTab from './ImagesTab';
import Documents from './Documets';

// create a component
class AlertPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            addToWalletVisible: false,
            addToWalledInnerPopUpVisible: false
        }
    }
    onPress = () => {
        this
            .props
            .navigation
            .goBack()
    }

    closeOverlays = () => {
        this.setState({counter: 0, addToWalletVisible: false, addToWalledInnerPopUpVisible: false})

    }

    changeWalletVisibility = () => {
        this.setState({addToWalletVisible: true, counter: 1})
    }

    openInnerOverlay = () => {
        this.setState({addToWalledInnerPopUpVisible: true, counter: 2})

    }

    navigateToForm = () => {
        this
            .props
            .navigation
            .navigate('CreditCardForm');
    }
    render() {
        return (
            <Container>
                <Header
                    hasTabs
                    noShadow={true}
                    style={{
                    backgroundColor: 'black'
                }}>
                    <View
                        style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        marginVertical: 30
                    }}>
                        {/* <View onTouchEnd={this.onPress}><Image
                            source={require('../assets/images/arrow_back.png')}
                            style={{
                width: 20,
                height: 20,
                marginBottom: 20
            }}/></View> */}
                    </View>
                    <View
                        style={{
                        flex: 1,
                        alignItems: 'center',
                        marginVertical: 30
                    }}>
                        <Text
                            style={{
                            color: 'white'
                        }}>Vault</Text>
                    </View>
                    <View
                        style={{
                        flex: 0.5,
                        alignItems: 'flex-end',
                        marginVertical: 30
                    }}>
                        {/* <Image
                            source={require('../assets/images/plus.png')}
                            style={{
                            height: 20,
                            width: 20
                        }}
                            onPress={this.openAddToWallet}/> */}
                        <Icon
                            name="md-search"
                            style={{
                            color: 'white',
                            fontSize: 20
                        }}/>

                    </View>
                    <View
                        style={{
                        flex: 0.5,
                        alignItems: 'flex-start',
                        marginVertical: 40,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon
                            name="ios-add"
                            style={{
                            color: 'white',
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}
                            onPress={this.changeWalletVisibility}/>
                    </View>
                </Header>

                <Tabs
                    tabBarUnderlineStyle={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'black'
                }}>
                    <Tab
                        heading="WALLET"
                        tabStyle={{
                        backgroundColor: '#fff'
                    }}
                        textStyle={{
                        color: 'black'
                    }}
                        activeTabStyle={{
                        backgroundColor: '#fff'
                    }}
                        activeTextStyle={{
                        color: '#000',
                        fontWeight: 'normal'
                    }}>
                        <OverlaySecondScreen
                            addToWalletVisible={this.state.addToWalletVisible}
                            addToWalledInnerPopUpVisible={this.state.addToWalledInnerPopUpVisible}
                            counter={this.state.counter}
                            closeOverlays={this.closeOverlays}
                            changeWalletVisibility={this.changeWalletVisibility}
                            openInnerOverlay={this.openInnerOverlay}
                            navigateToForm={this.navigateToForm}/>
                    </Tab>
                    <Tab
                        heading="IMAGES"
                        tabStyle={{
                        backgroundColor: '#fff'
                    }}
                        textStyle={{
                        color: 'black'
                    }}
                        activeTabStyle={{
                        backgroundColor: '#fff'
                    }}
                        activeTextStyle={{
                        color: '#000',
                        fontWeight: 'normal'
                    }}>
                        <ImagesTab/>
                    </Tab>
                    <Tab
                        heading="DOCS"
                        tabStyle={{
                        backgroundColor: '#fff'
                    }}
                        textStyle={{
                        color: 'black'
                    }}
                        activeTabStyle={{
                        backgroundColor: '#fff'
                    }}
                        activeTextStyle={{
                        color: '#000',
                        fontWeight: 'normal'
                    }}>
                        <Documents/>
                    </Tab>
                </Tabs>
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
export default AlertPage;
