import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DetailScreen from "../features/post/DetailScreen";
import PostScreen from "../features/post/PostScreen";
import { SCREENS } from "./routes";
import MainTabNavigator from "./MainTabNavigator";
import AuthStack from "./AuthStack";

const RootStack = createNativeStackNavigator();

export default function AppNavigator() {
  const [userToken, setUserToken] = useState();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {userToken == null ? (
          <RootStack.Screen name="AuthStack">
            {(props) => <AuthStack {...props} setUserToken={setUserToken} />}
          </RootStack.Screen>
        ) : (
          <>
            <RootStack.Screen name="MainTab">
              {(props) => <MainTabNavigator {...props} setUserToken={setUserToken} />}
            </RootStack.Screen>

            <RootStack.Screen
              name={SCREENS.POST_SCREEN}
              options={{
                headerShown: true,
                title: "รายการโพสต์",
              }}
            >
              {(props) => <PostScreen {...props} />}
            </RootStack.Screen>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );

  // return <View style={styles.container}>
  //     <Text>AppNavigator</Text>
  // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
});
