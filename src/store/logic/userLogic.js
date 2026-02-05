export const initialState = {
    data: null,
    loading: false,
    error: null
}

export const reducers = {
    fetchRequest: (state) => {
        state.loading = true;
        state.error = null;
    },
    fetchSuccess: (state, action) => {
        state.loading = false
        state.data = action.payload;
    },
    fetchFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
}