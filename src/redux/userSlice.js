import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const updateUser2 = createAsyncThunk(
  'user/updateUser2',
  async (user) => {
    const res = await axios.post('https://picture-upload.herokuapp.com/api/v1/user/signup/', user)
    return res.data
    
  }
)


const userSlice = createSlice({
  name: 'user',
  initialState: {
  userInfo : {
    name: "Ibrahim",
    email: "john@gmail.com",
  },
  pending: null,
  error: null,
  },
  reducers: {
    // updateStart: (state) => {
    //     state.pending = true;
    // },
    // updateSuccess: (state, action) => {
    //     state.pending = false;
    //     state.userInfo = action.payload;
    // },
    // updateFailure: (state) => {
    //     state.pending = false;
    //     state.error = true;
    // }

  },
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
})

export const { updateStart, updateFailure, updateSuccess } = userSlice.actions;
export default userSlice.reducer;