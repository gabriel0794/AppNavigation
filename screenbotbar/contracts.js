import * as React from 'react';
import { View, Text } from 'react-native';

export default function Contract({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Contract')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Contracts</Text>
        </View>
        
    )
}