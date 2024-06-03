import { apiSlice } from "./apiSlice";

const USERS_URL = '/api/users';
// using redux-toolkit
// mutation are used to modify data on server
// query is a function that generates request configuration for the mutation
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'POST',
                body: data
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            }),
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            })
        })

    })
})

export const {
             useLoginMutation,
            useLogoutMutation,
            useRegisterMutation,
            useUpdateUserMutation,
            } = userApiSlice;