import { createSlice } from "@reduxjs/toolkit";
import { InitialStateModel } from "./user.models";

const initialState: InitialStateModel = {
  id: null,
  token: null,
  email: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.token = payload.token;
      state.id = payload.id;
      state.email = payload.email;
    },
    removeUser(state) {
      state.token = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const user = userSlice.reducer;
