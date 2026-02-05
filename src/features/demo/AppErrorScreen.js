import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';

// --- 1. หน้าจอสำรอง (Fallback UI) เมื่อเกิด Error ---
function MyErrorUI({ error, resetErrorBoundary }) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorTitle}>💥 ส่วนนี้เกิดข้อผิดพลาด</Text>
      <Text style={styles.errorMessage}>{error.message}</Text>
      <Button title="ลองโหลดส่วนนี้ใหม่" onPress={resetErrorBoundary} />
    </View>
  );
}

// --- 2. Component เจ้าปัญหา (เอาไว้ทดสอบทำแอปพัง) ---
function BuggyComponent() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    // จำลองการเขียนโค้ดผิด เช่น พยายามเรียกของที่ไม่มีอยู่
    throw new Error("UI ส่วนนี้พังแล้ว!");
  }

  return (
    <View style={styles.componentBox}>
      <Text>กดปุ่มข้างล่างเพื่อทำให้ "เฉพาะส่วนนี้" พัง</Text>
      <Button color="red" title="ระเบิดตัวเอง" onPress={() => setShouldCrash(true)} />
    </View>
  );
}

// --- 3. หน้าจอหลักของแอป ---
export default function AppErrorScreen() {

  return (
    <View style={styles.container}>
      {/* ส่วนบน: ไม่โดนครอบด้วย ErrorBoundary */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ระบบจัดการ Error</Text>
        <Text>ส่วนนี้จะยังทำงานได้ปกติเสมอ แม้ข้างล่างจะพัง</Text>
      </View>

      <View style={styles.content}>
        {/* --- ชั้นที่ 1: ครอบเฉพาะจุดที่เสี่ยง --- */}
        <ErrorBoundary
          FallbackComponent={MyErrorUI}
          onReset={() => {
            // โค้ดที่ให้รันตอนกด "ลองใหม่อีกครั้ง" เช่น ล้าง State เดิม
            console.log("พยายามกู้คืนระบบ...");
          }}
        >
          <BuggyComponent />
        </ErrorBoundary>

        <View style={{ height: 20 }} />

        {/* ส่วนล่าง: แสดงให้เห็นว่าแอปยังกดปุ่มอื่นๆ ได้ */}
        <View style={styles.componentBox}>
          <Text>ส่วนนี้อยู่นอกเขต ErrorBoundary</Text>
          <Button title="ฉันยังกดได้ปกติ" onPress={() => alert('แอปไม่ตาย!')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 20, backgroundColor: '#6200ee', alignItems: 'center' },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  content: { padding: 20 },
  componentBox: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  errorContainer: {
    padding: 20,
    backgroundColor: '#ffebee',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f44336'
  },
  errorTitle: { fontSize: 18, fontWeight: 'bold', color: '#b71c1c', marginBottom: 10 },
  errorMessage: { color: '#d32f2f', marginBottom: 20, textAlign: 'center' }
});