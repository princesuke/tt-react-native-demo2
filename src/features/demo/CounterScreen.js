import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  // 1. ดึงข้อมูลที่เก็บไว้มาแสดงตอนเปิดแอป (Mount)
  useEffect(() => {
    const getData = async () => {
      const savedCount = await AsyncStorage.getItem('@my_counter');
      if (savedCount !== null) {
        setCount(parseInt(savedCount)); // แปลง string กลับเป็นตัวเลข
      }
    };
    getData();
  }, []);

  // 2. ฟังก์ชันเพิ่มค่า และบันทึกลงเครื่องทันที
  const increment = async () => {
    const newCount = count + 1;
    setCount(newCount);
    await AsyncStorage.setItem('@my_counter', newCount.toString()); // บันทึกเป็น string
  };

  // 3. ฟังก์ชันรีเซ็ตค่า
  const reset = async () => {
    setCount(0);
    await AsyncStorage.removeItem('@my_counter');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ตัวเลขปัจจุบัน:</Text>
      <Text style={styles.number}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>+ กดเพิ่มเลข</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={reset} style={{ marginTop: 20 }}>
        <Text style={{ color: 'red' }}>Reset ค่าใหม่</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  label: { fontSize: 18, color: '#333' },
  number: { fontSize: 80, fontWeight: 'bold', marginVertical: 20 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' }
});