import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ThemeSwitcherScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(()=>{
    const loadTheme = async () => {
        const saveTheme = await AsyncStorage.getItem("@user_theme");
        if(saveTheme !== null) {
            setIsEnabled(saveTheme === "dark")
        }
    }
    loadTheme();
  },[])

  const themeContainer = isEnabled ? styles.darkContainer : styles.lightContainer;
  const themeText = isEnabled ? styles.darkText : styles.lightText;

  const toggleTheme = async (value) => {
    setIsEnabled(value);
    const themeValue = value ? "dark" : 'light';
    await AsyncStorage.setItem("@user_theme", themeValue);
  }

  return (
    <View style={[styles.container, themeContainer]}>
      <Text style={[styles.title, themeText]}>
        {isEnabled ? 'Dark Mode' : 'Light Mode'}
      </Text>

      <View style={styles.row}>
        <Text style={themeText}>เปิดโหมดกลางคืน</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  // สไตล์สำหรับ Light Mode
  lightContainer: { backgroundColor: '#ffffff' },
  lightText: { color: '#000000' },
  // สไตล์สำหรับ Dark Mode
  darkContainer: { backgroundColor: '#121212' },
  darkText: { color: '#ffffff' },
});