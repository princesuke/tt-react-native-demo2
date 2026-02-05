import AppNavigator from "./src/navigation/AppNavigator";
import CounterScreen from "./src/features/demo/CounterScreen";
import ThemeSwitcherScreen from "./src/features/demo/ThemeSwitcherScreen";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { View, Button } from "react-native";

import Counter2Screen from "./src/features/demo/Counter2Screen";
import AppErrorScreen from "./src/features/demo/AppErrorScreen";
import UserScreen from "./src/features/demo/UserScreen";
import PostScreen from "./src/features/demo/PostScreen";

export default function App() {

  // return <UserScreen />
  // return <AppErrorScreen />

  // return <ThemeSwitcherScreen />

  // return <CounterScreen />npm

  // const triggerDeath = () => {
  //   console.log("กำลังจะระเบิดแอปใน 3... 2... 1...");
  //   setTimeout(() => {
  //     throw new Error('Fatal Error จากการทดสอบ!');
  //   }, 100);
  // };

  // return (
  //   <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
  //     {/* สร้างปุ่มกดเพื่อเรียกใช้ */}
  //     <Button 
  //       title="กดเพื่อทดสอบระบบดักจับ Error" 
  //       onPress={triggerDeath} 
  //       color="red" 
  //     />
  //   </View>
  // );

  return (
    <Provider store={store}>
      {/* <PostScreen /> */}
     <UserScreen />

      {/* <Counter2Screen /> */}
      {/* <AppNavigator /> */}
    </Provider>
  );
}
