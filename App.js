import AppNavigator from "./src/navigation/AppNavigator";
import CounterScreen from "./src/features/demo/CounterScreen";
import ThemeSwitcherScreen from "./src/features/demo/ThemeSwitcherScreen";
import { Provider } from "react-redux";
import { store } from "./src/store";

import Counter2Screen from "./src/features/demo/Counter2Screen";

export default function App() {
  // return <ThemeSwitcherScreen />

  // return <CounterScreen />npm

  return (
    <Provider store={store}>
      {/* <Counter2Screen /> */}
      <AppNavigator />
    </Provider>
  );
}
