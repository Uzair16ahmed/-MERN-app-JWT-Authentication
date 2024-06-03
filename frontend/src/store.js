import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';

// using dispatch to trigger redux actions, which would then be processed by 
//reducers to update the global state managed by redux.

const store = configureStore({
    reducer: {
        auth: authReducer, 
        // add it in as an index
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devtools: true,
});

export default store;