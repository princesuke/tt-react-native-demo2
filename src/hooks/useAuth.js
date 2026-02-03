import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useSelector, useDispatch } from 'react-redux';
import { setToken, clearToken, setLoading } from '../store/slices/authSlice';

export const useAuth = () => {
  // const [userToken, setUserToken] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { userToken, isLoading } = useSelector((state)=> state.auth);
  

  useEffect(() => {
    // ตรวจสอบ Token เมื่อ App เริ่มต้น
    const loadToken = async () => {
      try {
        const token = await SecureStore.getItemAsync('userToken');
        // setUserToken(token);
        dispatch(setToken(token))
      } catch (e) {
        console.error("Failed to load token", e);
      } finally {
        // setIsLoading(false);
        dispatch(setLoading(false))
      }
    };
    loadToken();
  }, []);

  // ฟังก์ชันสำหรับ Login (เก็บ Token)
  const login = async (token) => {
    await SecureStore.setItemAsync('userToken', token);
    // setUserToken(token);
    dispatch(setToken(token))
  };

  // ฟังก์ชันสำหรับ Logout (ลบ Token)
  const logout = async () => {
    await SecureStore.deleteItemAsync('userToken');
    // setUserToken(null);
    dispatch(clearToken());
  };

  return { userToken, isLoading, login, logout };
};