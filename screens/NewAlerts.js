//import liraries
import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';
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
class NewAlerts extends Component {
    render() {
        var arr = [];
        var names = ['Change of Address', 'Sex Offender', 'Name and Address Monitoring', 'Payday Loans'];
        for (var i = 0; i < names.length; i++) {
            arr.push({'Offence': names[i], 'date': '31/05/2018'})
        }
        return (
            <Container>
                {/* <Content> */}
                <List
                    dataArray={arr}
                    renderRow={(arr) => <ListItem>
                    <View style={{marginHorizontal:15}}>
                        <Button style={{borderRadius:4,padding:30,backgroundColor:'#d35400',height:25}}>
                            <Text style={{color:'white',fontSize:13}}>NEW</Text>
                        </Button>
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
                            fontSize:12,
                            fontWeight: 'bold'
                        }}>{arr.Offence}</Text>
                        <Text
                            style={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            fontSize:9
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
        backgroundColor: '#fff'
    }
});

//make this component available to the app
export default NewAlerts;
