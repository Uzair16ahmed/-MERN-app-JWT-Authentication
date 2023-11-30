import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userInfo')) : null 
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
    },
});

// when you call this its an action , when it changes the state its an reducers
// To use Slice bring it to store
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;