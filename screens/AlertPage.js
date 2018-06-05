//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
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

// create a component
class AlertPage extends Component {

    onPress = () => {
        this
            .props
            .navigation
            .goBack()
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
                        <View onTouchEnd={this.onPress}><Image
                            source={require('../assets/images/arrow_back.png')}
                            style={{
                width: 20,
                height: 20,
                marginBottom: 20
            }}/></View>
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
                        }}>Alerts</Text>
                    </View>
                    <View
                        style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        marginVertical: 30
                    }}>
                        <Text
                            style={{
                            color: 'white'
                        }}></Text>
                    </View>
                </Header>

                <Tabs
                    tabBarUnderlineStyle={{
                    borderBottomWidth: 0
                }}>
                    <Tab
                        heading="3 New Alerts"
                        tabStyle={{
                        backgroundColor: '#7f8c8d'
                    }}
                        textStyle={{
                        color: 'white'
                    }}
                        activeTabStyle={{
                        backgroundColor: '#f5f6fa'
                    }}
                        activeTextStyle={{
                        color: '#000',
                        fontWeight: 'normal'
                    }}>
                        <NewAlerts/>
                    </Tab>
                    <Tab
                        heading="1 Open Case"
                        tabStyle={{
                        backgroundColor: '#7f8c8d'
                    }}
                        textStyle={{
                        color: 'white'
                    }}
                        activeTabStyle={{
                        backgroundColor: '#f5f6fa'
                    }}
                        activeTextStyle={{
                        color: '#000',
                        fontWeight: 'normal'
                    }}>
                        <OpenCases/>
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
