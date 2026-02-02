import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://api.yourdomain.com/v1';

// --- (A) Public API: สำหรับ Login, Register, หรือข้อมูลสาธารณะ ---
export const publicApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// --- (B) Private API: สำหรับงานที่ต้องใช้ Token ---
export const privateApi = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
});

// --- (C) ใส่ Interceptor ให้ Private API เท่านั้น ---
privateApi.interceptors.request.use(
  async (config) => {
    // ดึง Token จาก Storage (หรือ Redux Store)
    const token = await AsyncStorage.getItem('userToken');
    
    if (token) {
      // แปะ Token เข้าไปที่ Header ทุกครั้งที่ยิง Private API
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// แถม: Response Interceptor (เอาไว้ดัก Error 401 เพื่อเตะคนออกไปหน้า Login)
privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Logic: Logout หรือ Clear Storage เมื่อ Token หมดอายุ
      console.log('Token expired, logging out...');
    }
    return Promise.reject(error);
  }
);
