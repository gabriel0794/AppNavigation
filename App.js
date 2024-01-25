import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import TopTabNavigator from './navigators/TopBarNavigator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text } from 'react-native'

//Screens
import Jobs from './screenbotbar/JobScreen';
import Proposals from './screenbotbar/proposals';
import Message from './screenbotbar/messages';
import Contract from './screenbotbar/contracts';
import Profile from './screenbotbar/profile';


//Scree names
const jobName = 'Jobs';
const proposalName = 'Proposals';
const messageName = 'Messages';
const contractName = 'Contracts';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
    
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
                activeTintColor: '#279EFF',
                inactiveTintColor: 'black',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}>

            

            <Tab.Screen options={{headerTitleAlign: 'center'}} name={jobName} component={Jobs}/>
            <Tab.Screen options={{headerTitleAlign: 'center'}} name={proposalName} component={Proposals}/>
            <Tab.Screen options={{headerShown: false}} name={messageName} component={Message}/>
            <Tab.Screen options={{headerTitleAlign: 'center'}} name={contractName} component={Contract}/>
            <Tab.Screen options={{headerTitleAlign: 'center'}} name={profileName} component={Profile}/>

            </Tab.Navigator>
    )
}
  

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

// function App() {
//   return (
//     <MainContainer />
//     // <SafeAreaProvider>
//     //   {/* <TopTabNavigator /> */}
//     // </SafeAreaProvider>
//   );
// }

export default App;