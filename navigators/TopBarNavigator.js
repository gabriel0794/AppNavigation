import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FeedScreen from '../screenstopbar/feedScreen'
import SavedScreen from '../screenstopbar/savedscreen'
import SearchScreen from '../screenstopbar/searchscreen'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator 
        initialRouteName='Feed'
        tabBarOptions={{
            activeTintColor: "#0C356A",
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: 'white', marginTop: insets.top}
        }}>
        
        <Tab.Screen 
            name="Feed"
            component={FeedScreen}
        />
        <Tab.Screen 
            name="Saved"
            component={SavedScreen}
        />
        <Tab.Screen 
            name="Search"
            component={SearchScreen}
        />


        </Tab.Navigator>
    );
}

export default function TopTabNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}