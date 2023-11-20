import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
  message: '',
  access_token: '',
  user: {
    id: null,
    registered: null,
    username: '',
    displayName: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.status = action.payload.status
      state.message = action.payload.message
      state.access_token = action.payload.SESSION_TOKEN
      state.user = action.payload.user
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
