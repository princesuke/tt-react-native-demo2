import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/slices/userSlice';

export default function UserScreen() {
  const dispatch = useDispatch();

  // (2) ดึงข้อมูลจาก Store มาใช้งาน (ดึงจาก state.user ตามที่ตั้งใน store/index.js)
  const { data, loading, error } = useSelector((state) => state.user);

  const handleFetchData = () => {
    // (3) สั่งงาน! เมื่อ dispatch ตัวนี้ Saga จะได้ยินแล้ววิ่งไปยิง API ทันที
    dispatch(userActions.fetchRequest(1));
  };

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>ข้อมูลผู้ใช้งาน</Text>

      {/* แสดงสถานะการโหลด */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {/* แสดง Error ถ้ามี */}
      {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}

      {/* แสดงข้อมูลที่ได้จาก Store */}
      {data ? (
        <View style={{ marginBottom: 20 }}>
          <Text>ชื่อ: {data.name}</Text>
          <Text>อีเมล: {data.email}</Text>
        </View>
      ) : (
          <Text style={{ marginBottom: 20 }}>ยังไม่มีข้อมูล</Text>
        )}

      <Button title="ดึงข้อมูลใหม่" onPress={handleFetchData} />
    </View>
  );
};

