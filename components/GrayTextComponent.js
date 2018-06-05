import React from 'react';
import {Text, View} from 'react-native';

export const GrayTextComponent = props => (
    <Text style={{
        color: 'gray',
        fontSize: 12
    }}>{props.text}</Text>
);