import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Inoicons } from "@expo/vector-icons";
import { SCREENS } from "./routes";
import HomeScreen from "../features/home/HomeScreen";
import DetailScreen from "../features/post/DetailScreen";
import PostScreen from '../features/post/PostScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
    return <Tab.Navigator>
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.DETAIL_SCREEN} component={DetailScreen} />
        {/* <Tab.Screen name={SCREENS.POST_SCREEN} component={PostScreen} /> */}
    </Tab.Navigator>
}