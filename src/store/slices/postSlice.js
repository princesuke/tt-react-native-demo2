import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "../logic/postLogic";

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers
})

export const postActions = postSlice.actions;
export default postSlice.reducer;