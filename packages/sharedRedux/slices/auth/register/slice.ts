import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './extraActions';

const initialState = {
    status: '',
    message: '',
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    resetRegisterSlice:() => {
      return initialState;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(registerUser.pending, state => {
        state.status = 'pending';
      })
      .addCase(registerUser.rejected, (state: any, action: any) => {
        state.error = action.payload;
      });
  },
});

export const { resetRegisterSlice } = registerSlice.actions;

export default registerSlice.reducer;