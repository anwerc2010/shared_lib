import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  user: any | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload;
    },
    setAuth: (state, action: PayloadAction<{ token: string | null; user?: any | null }>) => {
      state.token = action.payload.token;
      if (action.payload.user !== undefined) {
        state.user = action.payload.user;
      }
    },
    clearAuth: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, setUser, setAuth, clearAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice.reducer;

