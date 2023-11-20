import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../api/authApi';
import handleAPICall from '../../../../utils/redux/handleAPICall';
import { errorCallback, rejectWithValue } from '../../../../utils/redux/apiErrorHandlers';
import { updateUser } from '../../user/slice';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (authData, thunkAPI) => {
        const apiCall = () => login(authData);
        const successCallback = () => console.log("HTTP request has been successfull!");
        const delayDuration = 1000;
        const loginData = await handleAPICall({
            apiCall,
            rejectWithValue,
            successCallback,
            errorCallback,
            delayDuration,
        });
        thunkAPI.dispatch(updateUser(loginData));
        return loginData;
    },
);
