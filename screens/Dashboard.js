//import liraries
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Right,
    Icon,
    Body,
    Button
} from 'native-base';

// create a component
class Dashboard extends Component {
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
                        marginVertical: 30
                    }}>
                        {/*  <Image
                            source={require('../assets/images/arrow_back.png')}
                            style={{
                            width: 20,
                            height: 20,
                            marginBottom: 20
                        }}/> */}
                        <Icon name="ios-person"/>
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
                        }}>Dashboard</Text>
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
                <Content contentContainerStyle={styles.container}>
                    <View style={styles.dashboardImage}>

                        <View
                            style={{
                            flex: 1,
                            marginVertical: 20,
                            marginHorizontal: 20,
                            borderColor: '#e2e2e2',
                            padding: 10
                        }}>

                            <Text
                                style={{
                                position: 'absolute',
                                zIndex: 100,
                                padding: 20,
                                fontSize: 16,
                                textAlign: 'left'
                            }}>Breach and Scams news</Text>

                            <Image
                                source={require('../assets/images/educationBanner.png')}
                                style={{
                                width: Dimensions
                                    .get('window')
                                    .width * 120 / 100,
                                height: Dimensions
                                    .get('window')
                                    .height * 35 / 100
                            }}/>
                            <Button block
                                style={{
                                zIndex: 100,
                                position: 'absolute',
                                marginTop: 120,
                                marginLeft: 30,
                                marginBottom: 50,
                                width:'90%',
                                backgroundColor:'black'
                            }}>
                                <Text style={{color:'white'}}>View Education Center</Text>
                            </Button>
                        </View>
                        <Text
                            style={{
                            alignSelf: 'center',
                            marginBottom: 5
                        }}>Recent Items</Text>
                    </View>
                    <View style={styles.recentItems}>
                        <List
                            style={{
                            marginHorizontal: 10
                        }}>
                            <ListItem
                                selected
                                style={{
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Left
                                    style={{
                                    flex: 1
                                }}>
                                    <Image
                                        source={require('../assets/images/ic_dialog_credit_card.png')}
                                        style={{
                                        width: 30,
                                        height: 30
                                    }}/>
                                </Left>

                                <View
                                    style={{
                                    flex: 11,
                                    flexDirection: 'row'
                                }}>
                                    <Text
                                        style={{
                                        alignSelf: 'flex-start',
                                        marginLeft: 7,
                                        paddingTop: 5,
                                        flex: 3
                                    }}>Donald Blair</Text>

                                    <Image
                                        source={require('../assets/images/monitor_green.png')}
                                        style={{
                                        height: 30,
                                        width: 30,
                                        alignSelf: 'flex-end',
                                        flex: 1,
                                        resizeMode: 'contain'
                                    }}/>

                                </View>
                                <Right
                                    style={{
                                    flex: 1
                                }}>
                                    <Icon name="arrow-forward" style={{}}/>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#fff'
    },
    recentItems: {
        flex: 1,
        backgroundColor: '#fff'
    },
    dashboardImage: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e2e2',
        backgroundColor: '#f2f2f2'
    }
});

//make this component available to the app
export default Dashboard;
