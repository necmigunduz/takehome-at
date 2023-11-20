import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './extraActions';

const initialState = {
    status: '',
    message: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetLoginSlice:() => {
      return initialState;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(loginUser.pending, state => {
        state.status = 'pending';
      })
      .addCase(loginUser.rejected, (state: any, action: any) => {
        state.error = action.payload;
      });
  },
});

export const { resetLoginSlice } = loginSlice.actions;

export default loginSlice.reducer;