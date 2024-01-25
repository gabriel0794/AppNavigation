import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "../stacknavigation/chatsScreen";
import Message from "../screenbotbar/messages";



const Stack = createNativeStackNavigator();

export default function MessageStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Messages">
                <Stack.Screen name="Messages" component={Message}/>
                <Stack.Screen name="Chats" component={ChatsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

