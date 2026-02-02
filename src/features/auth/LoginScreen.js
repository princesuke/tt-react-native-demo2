import { View, Text, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentContainer}>
        <View style={styles.headerArea}>
          <Text style={styles.brandTag}>Ma App</Text>
          <Text style={styles.mainTitle}>Sign In</Text>
          <Text style={styles.subTitle}>ป้อนอีเมลและรหัสผ่านเพื่อไปต่อ</Text>
        </View>
      </View>

      <View style={styles.formArea}>
        {/* ใส่ฟอร์ม */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  // Header Section
  headerArea: {
    marginBottom: 40,
  },
  brandTag: {
    fontSize: 14,
    fontWeight: "800",
    color: "#007AFF",
    letterSpacing: 2,
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  subTitle: {
    fontSize: 16,
    color: "#8F92A1",
    marginTop: 4,
  },
  // Form Section
  formArea: {
    width: "100%",
  },
  inputBox: {
    backgroundColor: "#F5F7FB",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E1E5EE",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  input: {
    paddingVertical: 16,
    fontSize: 16,
    color: "#333",
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotText: {
    color: "#007AFF",
    fontWeight: "600",
  },
  loginBtn: {
    backgroundColor: "#007AFF",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    // เงาสำหรับ Android/iOS ให้ปุ่มดูลอย
    elevation: 4,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  loginBtnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  // Footer Section
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  footerText: {
    color: "#8F92A1",
    fontSize: 15,
  },
  signUpText: {
    color: "#007AFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});
