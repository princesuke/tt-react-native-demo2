import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userToken: null,
        isLoading: true,
        createdAt: null
    },
    reducers: {
        setToken:(state, action) => {
            state.userToken = action.payload;
            state.createdAt = action.createdAt;
            state.isLoading = false;
        },
        clearToken:(state)=> {
            state.userToken = null;
            state.isLoading = false;
        },
        setLoading:(state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const {setToken, clearToken, setLoading} = authSlice.actions;
export default authSlice.reducer;