import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";
import timestampMiddleware from "./middleware/timestampMiddleware";
import uppercaseMiddleware from "./middleware/upperCaseMiddleware";
import userReducer from "./slices/userSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import PostReducer from "./slices/postSlice";

const simpleLoggerMiddleware = (store) => (next) => (action) => {
  console.log("📢 กำลังส่งคำสั่ง:", action.type);
  const result = next(action); // ส่งคำสั่งต่อไปให้ถึง Reducer
  console.log("✅ เปลี่ยน State เป็น:", store.getState());
  return result;
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    user: userReducer,
    post: PostReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      simpleLoggerMiddleware,
      timestampMiddleware,
      uppercaseMiddleware,
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);
