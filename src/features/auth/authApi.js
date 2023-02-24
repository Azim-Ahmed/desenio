import { errorAlert, successAlert } from 'utils'
import { apiSlice } from '../Api/apiSlice'
import { userLoggedIn } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          localStorage.setItem(
            'auth',
            JSON.stringify({
              user: result?.data?.data?.user,
              accessToken: result?.data?.data?.token,
            })
          )
          // STORE USER TO REDUX STORE
          dispatch(
            userLoggedIn({
              user: result?.data?.data?.user,
              accessToken: result?.data?.data?.token,
            })
          )
        } catch (error) {
          if (error.error.status === "FETCH_ERROR") {
            errorAlert(error.error.error)
          } else if(error.error.data.status === 404){
            errorAlert(error.error.data.data.message)
          } else {
            errorAlert("Something went wrong")

          }
        }
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          result.data.data && successAlert("User registered successfully, please login");
        } catch (error) {
          if (error.error.status === "FETCH_ERROR") {
            errorAlert(error.error.error)
          } else {
            errorAlert("something went wrong")
          }
        }
      },
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
