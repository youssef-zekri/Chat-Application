import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "url";

const initialState = {
  Users: [],
};
export const GetAllUsers = createAsyncThunk("Favorit/GetAllUsers", async () => {
  try {
    const res = await axios.get(url);
  } catch (err) {
    console.log(err);
  }
});

export const UsersSlice = createSlice({
  name: "Favorit",
  initialState,
  reducers: {},
  extraReducers: (builder : any) => {
    builder.addCase(GetAllUsers.pending, () => {});
    builder.addCase(GetAllUsers.fulfilled, (state: any, { payload }: any) => {
      state.Users = payload;
    });
    builder.addCase(GetAllUsers.rejected, () => {});
  },
});

export const {} = UsersSlice.actions;
export default UsersSlice.reducer;
