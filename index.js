import { registerRootComponent } from 'expo';
import { Alert, LogBox } from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import App from './App';

// LogBox.ignoreAllLogs();


// setJSExceptionHandler((error, isFatal) => {

//   if (isFatal) {
//     Alert.alert(
//       'เกิดข้อผิดพลาดไม่คาดคิด',
//       `ระบบขัดข้อง: ${error.name} \nกรุณาปิดและเปิดแอปใหม่อีกครั้ง`,
//       [{ text: 'ตกลง' }]
//     );

//     return
//   } else {
//     console.log('Non-fatal:', error);
//     // Alert.alert(error)
//   }

//    Alert.alert('เกิดข้อผิดพลาดไม่คาดคิด')
  
// }, true);



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
