//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Platform} from 'react-native';
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
import {Overlay} from 'react-native-elements';

// create a component
class OverlaySecondScreen extends Component {

    closeOverlays = () => {
        this
            .props
            .closeOverlays({counter: 0, addToWalletVisible: false, addToWalledInnerPopUpVisible: false})
    }

    changeWalletVisibility = () => {
        this
            .props
            .changeWalletVisibility({addToWalletVisible: true, counter: 1})
    }

    openInnerOverlay = () => {
        this
            .props
            .openInnerOverlay({addToWalledInnerPopUpVisible: true, counter: 2})

    }

    navigateToForm = () => {
        this
            .props
            .navigateToForm('CreditCardForm');
    }

    render() {
        return (
                <View
                    style={{
                    flex: 1,
                    zIndex: 100,
                    top: 0,justifyContent:'center'
                }}>
                    {this.props.addToWalletVisible
                        ? <Overlay
                                isVisible={this.props.addToWalletVisible}
                                overlayBackgroundColor="white" 
                                windowBackgroundColor="#e2e2e2"
                                onBackdropPress={this.closeOverlays}
                                overlayStyle={{
                                height: 270,
                                width: 300,
                                // marginBottom: 200
                            }}>
                                {this.props.addToWalledInnerPopUpVisible && this.props.counter === 2
                                    ? <View
                                            style={{
                                            flex: 1
                                        }}>
                                            <View
                                                style={{
                                                flex: 0.4,
                                                borderBottomWidth: 2,
                                                borderBottomColor: 'black',
                                                flexDirection: 'row',
                                                justifyContent: "space-between"
                                            }}>
                                                <Text
                                                    style={{
                                                    color: 'gray',
                                                    fontSize: 12,
                                                    marginBottom: 10,
                                                    alignItems: 'flex-start'
                                                }}>Add To Wallet</Text>
                                                <Icon
                                                    name="ios-close-circle-outline"
                                                    style={{
                                                    color: 'black',
                                                    fontSize: 15
                                                }}
                                                    onPress={this.closeOverlays}/>
                                            </View>
                                            <View
                                                style={{
                                                alignItems: "flex-end",
                                                flex: 0.4
                                            }}></View>
                                            <View
                                                style={{
                                                flex: 3.6,
                                                alignContent: 'flex-start',
                                                flexDirection: 'column'
                                            }}>
                                                <View
                                                    style={{
                                                    flex: 0.5
                                                }}>
                                                    <TouchableHighlight
                                                        onPress={this.navigateToForm}
                                                        underlayColor="transparent"
                                                        activeOpacity={0}>
                                                        <Image
                                                            source={require('../assets/images/ic_dialog_credit_card.png')}
                                                            style={{
                                                            height: 35,
                                                            width: 35
                                                        }}/>
                                                    </TouchableHighlight>
                                                    <Text
                                                        onPress={this.navigateToForm}
                                                        style={{
                                                        fontSize: 10,
                                                        marginLeft: 2
                                                    }}>Credit Card</Text>

                                                </View>
                                            </View>
                                        </View>
                                    : <View
                                        style={{
                                        flex: 1
                                    }}>
                                        <View
                                            style={{
                                            flex: 0.4,
                                            borderBottomWidth: 2,
                                            borderBottomColor: 'black',
                                            flexDirection: 'row',
                                            justifyContent: "space-between"
                                        }}>
                                            <Text
                                                style={{
                                                color: 'gray',
                                                fontSize: 12,
                                                marginBottom: 10,
                                                alignItems: 'flex-start'
                                            }}>Add To Wallet</Text>
                                            <Icon
                                                name="ios-close-circle-outline"
                                                style={{
                                                color: 'black',
                                                fontSize: 15
                                            }}
                                                onPress={this.closeOverlays}/>
                                        </View>
                                        <View
                                            style={{
                                            alignItems: "flex-end",
                                            flex: 0.4
                                        }}></View>
                                        <View
                                            style={{
                                            flex: 3.6,
                                            alignContent: 'flex-start',
                                            flexDirection: 'column'
                                        }}>
                                            <View
                                                style={{
                                                flex: 0.5
                                            }}>
                                                <TouchableHighlight
                                                    onPress={this.openInnerOverlay}
                                                    underlayColor="transparent"
                                                    activeOpacity={0}>
                                                    <Image
                                                        source={require('../assets/images/ic_dialog_bank_account.png')}
                                                        style={{
                                                        height: 35,
                                                        width: 35
                                                    }}/>
                                                </TouchableHighlight>
                                                <Text
                                                    onPress={this.openInnerOverlay}
                                                    style={{
                                                    fontSize: 10,
                                                    marginLeft: 2
                                                }}>Credit & Bank Accounts</Text>

                                            </View>
                                        </View>
                                    </View>}

                            </Overlay>
                        : <Text></Text>
}
                </View>
        )
    }
}

export default OverlaySecondScreen;