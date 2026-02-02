import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "./routes";
import LoginScreen from "../features/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack({setUserToken}) {
    return <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name={SCREENS.LOGIN}>
            {(props)=> <LoginScreen {...props} setUserToken={setUserToken} />}
        </Stack.Screen>
    </Stack.Navigator>
}