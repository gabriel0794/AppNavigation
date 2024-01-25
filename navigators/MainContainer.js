import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import TopTabNavigator from './TopBarNavigator';

//Screens
import Jobs from '../screenbotbar/JobScreen';
import Proposals from '../screenbotbar/proposals';
import Message from '../screenbotbar/messages';
import Contract from '../screenbotbar/contracts';
import Profile from '../screenbotbar/profile';


//Scree names
const jobName = 'Jobs';
const proposalName = 'Proposals';
const messageName = 'Messages';
const contractName = 'Contracts';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={jobName}
            
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === jobName) {
                        iconName = focused ? 'briefcase' : 'briefcase-outline';
                    } else if (rn === proposalName) {
                        iconName = focused ? 'document' : 'document-outline';
                    } else if (rn === messageName) {
                        iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
                    } else if (rn === contractName) {
                        iconName = focused ? 'checkbox' : 'checkbox-outline';
                    } else if (rn === profileName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'black',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}>

            

            <Tab.Screen options={{headerShown: false}} name={jobName} component={StackNavigator}/>
            <Tab.Screen options={{headerShown: false}} name={proposalName} component={Proposals}/>
            <Tab.Screen options={{headerShown: false}} name={messageName} component={Message}/>
            <Tab.Screen options={{headerShown: false}} name={contractName} component={Contract}/>
            <Tab.Screen options={{headerShown: false}} name={profileName} component={Profile}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <TopTabNavigator />
        </Stack.Navigator>
    )
}