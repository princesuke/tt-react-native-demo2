import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "../logic/authLogic";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { setToken, clearToken, setLoading } = authSlice.actions;
export default authSlice.reducer;