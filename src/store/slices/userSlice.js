import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "../logic/userLogic";

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers
})

export const userActions = userSlice.actions;
export default userSlice.reducer;