//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Documents extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Docs empty,add new</Text>
                <Text>documents by uploading</Text>
                <Text>from website</Text>

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
export default Documents;
