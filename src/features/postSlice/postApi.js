import profileApi from 'features/profile/profileApi';
import homeApi from 'features/homepage/homeApi';

const { apiSlice } = require("features/Api/apiSlice");

const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    likePost: builder.mutation({
      query: (postId) => ({
        url: `/like/post/${postId}`,
      }),

      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled;
          //TODO need to upgrade
          dispatch(profileApi.util.invalidateTags(["getPost"]));
          dispatch(homeApi.util.invalidateTags(["homePosts"]));
        } catch (error) {}
      },
    }),
    commentPost: builder.mutation({
      query: ({ postId, formData }) => ({
        url: `/comment/post/${postId}`,
        method: "POST",
        body: formData,
      }),
    }),
    deleteCommentFromPost: builder.mutation({
      query: (commentId) => ({
        url: `/undo-comment/post/${commentId}`,
      }),
    }),
  }),
});

export const {
  useLikePostMutation,
  useCommentPostMutation,
  useDeleteCommentFromPostMutation,
} = postApi;
