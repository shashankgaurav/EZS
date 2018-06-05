//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
    Container,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Body,
    List,
    ListItem
} from 'native-base';

// create a component
class Monitor extends Component {

    onPress = () => {}
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
                        {/* <Image
                            source={require('../assets/images/arrow_back.png')}
                            style={{
                            width: 20,
                            height: 20,
                            marginBottom: 20
                        }}/> */}
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
                        }}></Text>
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
export default Monitor;
