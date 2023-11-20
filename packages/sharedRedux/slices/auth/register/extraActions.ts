import { createAsyncThunk } from '@reduxjs/toolkit';
import { register } from '../../../api/authApi';
import handleAPICall from '../../../../utils/redux/handleAPICall';
import { errorCallback, rejectWithValue } from '../../../../utils/redux/apiErrorHandlers';
import { updateUser } from '../../user/slice';

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (authData, thunkAPI) => {
        const apiCall = () => register(authData);
        const successCallback = () => console.log("HTTP request has been successfull!");
        const delayDuration = 3000;
        const registerData = await handleAPICall({
            apiCall,
            rejectWithValue,
            successCallback,
            errorCallback,
            delayDuration,
        });
        thunkAPI.dispatch(updateUser(registerData));
        return registerData;
    },
);
