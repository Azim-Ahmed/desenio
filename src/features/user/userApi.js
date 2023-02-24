const { apiSlice } = require("features/Api/apiSlice");

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFollowingRequest: builder.mutation({
      query: (body) => ({
        url: `/follow`,
        method: "POST",
        body,
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;
          if (result.data.data.message) {
            dispatch(userApi.util.invalidateTags(["getUserData"]));

            // dispatch(
            //   profileApi.util.updateQueryData("getPost", undefined, (draft) => {
            //     console.log({ draft })
            //     // return draft.unshift(result);
            //   })
            // );
          }
        } catch (err) {}
      },
    }),

    unFollowRequest: builder.mutation({
      query: (FollowId) => ({
        url: `/unfollow/${FollowId}`,
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;
          if (result.data.data.message) {
            dispatch(userApi.util.invalidateTags(["getUserData"]));

            // dispatch(
            //   profileApi.util.updateQueryData("getPost", undefined, (draft) => {
            //     console.log({ draft })
            //     // return draft.unshift(result);
            //   })
            // );
          }
        } catch (err) {}
      },
    }),

    getUserData: builder.query({
      query: (id) => ({
        url: `/get-user-data/${id}`,
      }),
      providesTags: (_) => ["getUserData"],
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useAddFollowingRequestMutation,
  useUnFollowRequestMutation,
} = userApi;
