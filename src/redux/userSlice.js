import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
  userInfo : {
    name: "Ibrahim",
    email: "john@gmail.com",
  },
  pending: false,
  error: null,
  },
  reducers: {
    updateStart: (state) => {
        state.pending = true;
    },
    updateSuccess: (state, action) => {
        state.pending = false;
        state.userInfo = action.payload;
    },
    updateFailure: (state) => {
        state.pending = false;
        state.error = true;
    }

  }
})

export const { updateStart, updateFailure, updateSuccess } = userSlice.actions;
export default userSlice.reducer;