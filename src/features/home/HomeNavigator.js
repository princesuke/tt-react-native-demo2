import React, { useCallback } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --- 1. Reusable Component: MyButton (ฉบับแก้ไขที่คุยกัน) ---
// ใช้สี Default จากธีม หรือจะส่ง color เข้ามาเองก็ได้
const MyButton = ({ title, color = '#007AFF', onPress }) => (
  <TouchableOpacity 
    style={styles.button} 
    onPress={onPress}
    activeOpacity={0.7}
    accessibilityRole="button" // ช่วยให้ Testing Library หาเจอง่ายขึ้น
  >
    <Text style={[styles.buttonText, { color: color }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

// --- 2. Screen: HomeScreen ---
const HomeScreen = ({ navigation }) => {
  // ใช้ useCallback ตามที่คุณถาม เพื่อจำฟังก์ชันการนำทาง
  const handleGoToDetail = useCallback(() => {
    navigation.navigate('DetailScreen', { msg: 'มาจากหน้า Home' });
  }, [navigation]);

  return (
    <View style={styles.center}>
      <Text style={styles.header}>ยินดีต้อนรับสู่ CodeCamp</Text>
      <MyButton 
        title="ไปหน้ารายละเอียด" 
        onPress={handleGoToDetail} 
      />
    </View>
  );
};

// --- 3. Screen: DetailScreen ---
const DetailScreen = ({ route, navigation }) => {
  const { msg } = route.params || {};

  return (
    <View style={styles.center}>
      <Text style={styles.header}>หน้ารายละเอียด</Text>
      <Text style={{ marginBottom: 20 }}>ข้อมูล: {msg}</Text>
      
      <MyButton 
        title="กลับหน้าหลัก" 
        color="red" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

// --- 4. Main Navigator ---
const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          // ✅ ป้องกัน Error: ต้องใช้ {false} ห้ามใช้ "false"
          headerShown: true, 
          headerStyle: { backgroundColor: '#f4f4f4' }
        }}
      >
        <RootStack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'หน้าแรก' }}
        />

        {/* ท่าที่คุณชอบ: ใช้ Function as Children */}
        <RootStack.Screen name="DetailScreen" options={{ title: 'รายละเอียด' }}>
          {(props) => <DetailScreen {...props} />}
        </RootStack.Screen>

      </RootStack.Navigator>
    </NavigationContainer>
  );
}

// --- 5. Styles ---
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});