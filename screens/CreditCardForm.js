//import liraries
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    Switch,
    TextInput,
    Platform,
    Picker
} from 'react-native';
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
    ScrollableTab,
    Label
} from 'native-base';

// create a component
class CreditCardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    render() {
        return (
            <Container style={{
                flex: 1
            }}>
                <Header
                    noShadow={true}
                    style={{
                    backgroundColor: 'black'
                }}>
                    <View
                        style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        marginVertical: 30,
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <View
                            style={{
                            flex: 0.5,
                            alignItems: 'flex-start'
                        }}><Icon
                            name="md-arrow-back"
                            style={{
                fontSize: 20,
                color: 'white',
                marginRight: 20
            }}/>
                        </View>
                        <View
                            style={{
                            flex: 1,
                            alignItems: 'flex-start'
                        }}>
                            <Text
                                style={{
                                color: 'white'
                            }}>Vault</Text>
                        </View>
                    </View>
                    <View
                        style={{
                        flex: 1,
                        alignItems: 'center',
                        marginVertical: 30
                    }}></View>
                    <View
                        style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        marginVertical: 30
                    }}>
                        <Image
                            source={require('../assets/images/ic_save.png')}
                            style={{
                            height: 20,
                            width: 20
                        }}/>
                    </View>

                </Header>
                <Content
                    contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: 12,
                    marginTop: 10
                }}>
                    <ScrollView
                        style={{
                        flex: 1
                    }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: "center",
                            alignItems: "center",
                            borderBottomWidth: 0.5,
                            borderBottomColor: "gray"
                        }}>
                            <Text
                                style={{
                                fontSize: 13,
                                alignItems: 'flex-start',
                                flex: 10,
                                marginHorizontal: 'auto',
                                marginVertical: 10
                            }}>Monitored</Text>
                            <Switch
                                value={this.state.toggle}
                                onTintColor="green"
                                accessibilityLabel=""
                                ref="monitorToggle"
                                tintColor="gray"
                                onValueChange={(toggle) => this.setState({toggle})}
                                style={{
                                flex: 2
                            }}/>
                        </View>
                        <View
                            style={{
                            marginTop: 8
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Credit Card Number</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType={Platform.OS === 'android'
                                ? 'numeric'
                                : 'number-pad'}/>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Card Holder Name</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType="default"/>
                        </View>
                        <View
                            style={{
                            marginVertical: 6,
                            flexDirection: 'row'
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                flex: 6
                            }}>Expiration Date: Month</Label>
                            <Label
                                style={{
                                fontSize: 12,
                                flex: 6
                            }}>Expiration Date: Year</Label>
                        </View>
                        <View
                            style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start'
                        }}>

                            <Picker
                                selectedValue="1990"
                                style={{
                                flex: 3
                            }}>
                                <Picker.Item label="1990" value="1990"/>
                                <Picker.Item label="1991" value="1991"/>
                                <Picker.Item label="1992" value="1992"/>
                                <Picker.Item label="1993" value="1993"/>
                                <Picker.Item label="1994" value="1994"/>
                                <Picker.Item label="1995" value="1995"/>
                                <Picker.Item label="1996" value="1996"/>
                                <Picker.Item label="1997" value="1997"/>
                                <Picker.Item label="1998" value="1998"/>
                                <Picker.Item label="1999" value="1999"/>
                                <Picker.Item label="2000" value="2000"/>

                            </Picker>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>PIN</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType={Platform.OS === 'android'
                                ? 'numeric'
                                : 'number-pad'}/>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Website</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType="email-address"/>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Notes</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType="default"/>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Card Category</Label>
                            <Picker selectedValue="cc">
                                <Picker.Item label="Credit Card" value="cc"/>
                                <Picker.Item label="Debit Card" value="dc"/>
                            </Picker>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Card Type</Label>
                            <Picker selectedValue="Visa">
                                <Picker.Item label="American Express" value="amex"/>
                                <Picker.Item label="Discover" value="discover"/>
                                <Picker.Item label="MasterCard" value="mc"/>
                                <Picker.Item label="Visa" value="visa"/>
                            </Picker>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Issuing/Banking Financial Institution</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType="default"/>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Card Level</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType="default"/>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Issuing Country</Label>
                            <Picker selectedValue="India">
                                <Picker.Item label="USA" value="usa"/>
                                <Picker.Item label="India" value="in"/>
                                <Picker.Item label="Australia" value="aus"/>
                                <Picker.Item label="England" value="eng"/>
                            </Picker>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>PIN</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType={Platform.OS === 'android'
                                ? 'numeric'
                                : 'number-pad'}/>
                        </View>
                        <View
                            style={{
                            marginVertical: 6
                        }}>
                            <Label
                                style={{
                                fontSize: 12,
                                textAlign: 'left'
                            }}>Customer Service Phone Number</Label>
                            <TextInput
                                style={{
                                fontSize: 12,
                                paddingLeft: 5,
                                paddingBottom: 2,
                                width: '100%'
                            }}
                                multiline={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType={Platform.OS === 'android'
                                ? 'numeric'
                                : 'number-pad'}/>
                        </View>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

export default CreditCardForm;