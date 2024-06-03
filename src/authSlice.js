// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  currentAccount: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.currentAccount = action.payload;
    },
    logout(state) {
      state.loggedIn = false;
      state.currentAccount = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
