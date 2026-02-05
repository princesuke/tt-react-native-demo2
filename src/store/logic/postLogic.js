export const initialState = {
    items: [],
    loading: false,
    error: null
}

export const reducers = {
    fetchPostsRequest: (state) => {
        state.loading = true;
        state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
        state.loading = false;
        state.items = action.payload;
    },
    fetchPostsFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
}