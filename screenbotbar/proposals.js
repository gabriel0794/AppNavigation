import * as React from 'react';
import { View, Text } from 'react-native';

export default function Proposals({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Jobs')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Proposals</Text>
        </View>
        
    )
}