import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/user/slice';
import loginReducer from './slices/auth/login/slice';
import registerReducer from './slices/auth/register/slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        register: registerReducer,
    },
})