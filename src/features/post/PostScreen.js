import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl
} from "react-native";
import axios from "axios";

export default function PostScreen({route}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefresing] = useState(false);

  const {postId, postTitle} = route.params || {}

    const fetchPosts = async (isRefresing = false) => {
        if(isRefresing) setRefresing(true);
        try {

        setLoading(true);
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
        );
        // ตัดเอาแค่ 5 รายการแรก
        // setPosts(res.data.slice(0, 5));
        setPosts(res.data);
        } catch (error) {
        console.error("Error:", error.message);
        } finally {
            setLoading(false); // ปิดตัวหมุนโหลดไม่ว่าจะสำเร็จหรือพลาด
            setRefresing(false);
        }
    };

    const onRefresh = useCallback(()=> {
        fetchPosts(true);
    }, []);


  useEffect(() => {
    fetchPosts();
  }, []); // [] หมายถึงทำครั้งเดียวตอน Mount

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>กำลังโหลดโพสต์...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>5 โพสต์ล่าสุด</Text>
      <Text>{postId} {postTitle}</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}

        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 16, textTransform: "capitalize" },
});
