import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../../store/slices/postSlice';

export default function PostScreen() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(postActions.fetchPostsRequest()); // สั่งดึงข้อมูลตอนเปิดหน้าจอ
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  if (loading && items.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {
    backgroundColor: '#fff', padding: 16, marginBottom: 12,
    borderRadius: 8, elevation: 3
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  body: { color: '#666' },
  errorText: { color: 'red', textAlign: 'center', margin: 10 }
});