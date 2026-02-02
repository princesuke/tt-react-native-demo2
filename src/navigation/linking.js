import * as Linking from "expo-linking";
import { SCREENS } from "./routes";

const linking = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      AuthStack: {
        screens: {
          [SCREENS.LOGIN]: "login",
          [SCREENS.REGISTER]: "register",
        },
      },
      MainTab: {
        screens: {
          [SCREENS.USER_LIST]: "users",
          [SCREENS.USER_DETAIL]: "users/:id",
          [SCREENS.SETTINGS]: "settings",
          [SCREENS.ABOUT]: "about",
        },
      },
    },
  },
};

export default linking;
