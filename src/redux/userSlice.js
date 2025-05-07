import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return {};
    },
    edit_data(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { login, logout, edit_data } = userSlice.actions;
export default userSlice.reducer;
