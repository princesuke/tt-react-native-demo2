import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";
import timestampMiddleware from "./middleware/timestampMiddleware";
import uppercaseMiddleware from "./middleware/upperCaseMiddleware";

const simpleLoggerMiddleware = (store) => (next) => (action) => {
  console.log("📢 กำลังส่งคำสั่ง:", action.type);
  const result = next(action); // ส่งคำสั่งต่อไปให้ถึง Reducer
  console.log("✅ เปลี่ยน State เป็น:", store.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      simpleLoggerMiddleware,
      timestampMiddleware,
      uppercaseMiddleware,
    ),
});
