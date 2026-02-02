import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SCREENS } from "./routes";
import HomeScreen from "../features/home/HomeScreen";
import DetailScreen from "../features/post/DetailScreen";
import PostScreen from "../features/post/PostScreen";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator({ setUserToken }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === SCREENS.HOME) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === SCREENS.DETAIL_SCREEN) {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* <Tab.Screen name={SCREENS.HOME} component={HomeScreen} /> */}
      <Tab.Screen name={SCREENS.HOME}>
        {(props) => <HomeScreen {...props} setUserToken={setUserToken} />}
      </Tab.Screen>
      <Tab.Screen name={SCREENS.DETAIL_SCREEN} component={DetailScreen} />
      {/* <Tab.Screen name={SCREENS.POST_SCREEN} component={PostScreen} /> */}
    </Tab.Navigator>
  );
}
