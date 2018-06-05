//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Right,
    Icon,
    Left,
    Button
} from 'native-base';

// create a component
class OpenCases extends Component {
    render() {
        var arr = [];
        var cases = ['Internet Monitoring', 'Payment Monitoring'];
        for (var i = 0; i < cases.length; i++) {
            arr.push({'Offence': cases[i], 'date': '31/05/2018'})
        }
        return (
            <Container>
                {/* <Content> */}
                <List
                    dataArray={arr}
                    renderRow={(arr) => <ListItem>
                    <View
                        style={{
                        marginHorizontal: 15
                    }}>
                        {arr.Offence === 'Payment Monitoring'
                            ? <Button
                                    style={{
                                    borderRadius: 4,
                                    padding: 30,
                                    height: 25,
                                    backgroundColor: 'red'
                                }}>
                                    <Text
                                        style={{
                                        color: 'white',
                                        fontSize: 12
                                    }}>Open</Text>
                                </Button>
                            : <Button
                                disabled
                                bordered
                                style={{
                                borderRadius: 4,
                                padding: 30,
                                height: 25,
                                backgroundColor: 'white'
                            }}>
                                <Text
                                    style={{
                                    color: 'gray',
                                    fontSize: 12
                                }}>Resolve</Text>
                            </Button>}
                    </View>
                    <Left
                        style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <Text
                            style={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}>{arr.Offence}</Text>
                        <Text
                            style={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            fontSize: 9
                        }}>{arr.date}</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward"/>
                    </Right>
                </ListItem>}></List>
                {/* </Content> */}
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
        backgroundColor: '#2c3e50'
    }
});

//make this component available to the app
export default OpenCases;
