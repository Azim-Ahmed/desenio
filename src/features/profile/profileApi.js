import homeApi from "features/homepage/homeApi";

const { apiSlice } = require("features/Api/apiSlice");

const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "/profile",
      }),
      providesTags: (_) => ["getProfile"],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: "/update-profile",
        method: "POST",
        body,
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;
          if (result.data) {
            dispatch(profileApi.util.invalidateTags(["getProfile"]));
            if (arg.route === "home") {
              dispatch(profileApi.util.invalidateTags(["getProfile"]));
            }
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
    updateAvatar: builder.mutation({
      query: (body) => ({
        url: "/avatar-cover-update",
        method: "POST",
        Authorization: "Bearer 22|8M5dt7ipVq2WU1DFQbLObEG1G7v6jUvwQT4Sc33F",
        body,
      }),
    }),
    createPost: builder.mutation({
      query: ({ formData }) => ({
        url: "/post/create",
        method: "POST",
        body: formData,
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;
          console.log({ arg, result });
          if (result.data.data.id) {
            dispatch(profileApi.util.invalidateTags(["getPost"]));
            if (arg.route === "home") {
              dispatch(homeApi.util.invalidateTags(["homePosts"]));
            }
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
    updatePost: builder.mutation({
      query: (body) => ({
        url: `/post/update/${body.id}`,
        method: "POST",
        body,
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;
          if (result.data.data.message) {
            dispatch(profileApi.util.invalidateTags(["getPost"]));
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
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/post/destroy/${id}`,
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;
          if (result.data.data.message) {
            dispatch(profileApi.util.invalidateTags(["getPost"]));

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
    getPost: builder.query({
      query: () => ({
        url: "/post/get",
      }),
      providesTags: (_) => ["getPost"],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useGetProfileQuery,
  useUpdateAvatarMutation,
  useCreatePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = profileApi;
export default profileApi;