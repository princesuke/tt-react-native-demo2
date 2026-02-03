export const initialState = {
  userToken: null,
  isLoading: true,
  createdAt: null,
};

export const reducers = {
  setToken: (state, action) => {
    state.userToken = action.payload;
    state.createdAt = action.createdAt;
    state.isLoading = false;
  },
  clearToken: (state) => {
    state.userToken = null;
    state.isLoading = false;
  },
  setLoading: (state, action) => {
    state.isLoading = action.payload;
  },
};
