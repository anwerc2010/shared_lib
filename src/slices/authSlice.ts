import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  id: number | string;
  [key: string]: any;
}

export interface LoginSuccessPayload {
  token: string;
  refreshToken: string | null;
  expiryTimestamp: number | null;
  user: AuthUser | null;
}

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  expiryTimestamp: number | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
  isSessionRestoring: boolean;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  expiryTimestamp: null,
  user: null,
  isAuthenticated: false,
  isSessionRestoring: true, // true on boot so splash shows until session check completes
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.expiryTimestamp = action.payload.expiryTimestamp;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isSessionRestoring = false;
    },
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.expiryTimestamp = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isSessionRestoring = false;
    },
    sessionRestored: (state) => {
      state.isSessionRestoring = false;
    },
    // Backward-compatible actions
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload;
    },
    setAuth: (
      state,
      action: PayloadAction<{ token: string | null; user?: any | null }>,
    ) => {
      state.token = action.payload.token;
      if (action.payload.user !== undefined) {
        state.user = action.payload.user;
      }
      state.isAuthenticated = action.payload.token !== null;
      state.isSessionRestoring = false;
    },
    clearAuth: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.expiryTimestamp = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  loginSuccess,
  logout,
  sessionRestored,
  setToken,
  setUser,
  setAuth,
  clearAuth,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice.reducer;
