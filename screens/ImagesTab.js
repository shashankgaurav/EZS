//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'native-base';

// create a component
class ImagesTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>You have no images in vault</Text>
                <Text>add new images by tapping</Text>
                <Button style={{backgroundColor:"white"}}>
                    <Text>+</Text>
                </Button>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2'
    }
});

//make this component available to the app
export default ImagesTab;
