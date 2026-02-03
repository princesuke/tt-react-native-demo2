import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../store/slices/counterSlice';
import { View, Text, Button } from 'react-native';

export default function Counter2Screen() {
  const dispatch = useDispatch();
  
  // useSelector ดึงแค่ตัวเลข value ออกมา
  const count = useSelector((state) => state.counter.value);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>{count}</Text>

      {/* จังหวะสั่งงาน ต้องใส่ dispatch ครอบฟังก์ชัน action เสมอ */}
      <Button title="+ เพิ่ม" onPress={() => dispatch(increment())} />
      <Button title="- ลด" onPress={() => dispatch(decrement())} />
      <Button title="ล้างค่า" onPress={() => dispatch(reset())} color="red" />
    </View>
  );
}
