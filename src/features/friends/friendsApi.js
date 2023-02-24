const { apiSlice } = require("features/Api/apiSlice");

const friendsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => ({
        url: "/get-friends",
      }),
    }),
    getFriendRequest: builder.query({
      query: () => ({
        url: "/get-friend-requests",
      }),
    }),
    sendFriendRequest: builder.mutation({
      query: (body) => ({
        url: "/send-friend-request",
        method: "POST",
        body,
      }),
    }),
    acceptFriendRequest: builder.mutation({
      query: (id) => ({
        url: `/accept-friend-request/${id}`,
      }),
    }),
    rejectFriendRequest: builder.mutation({
      query: (id) => ({
        url: `/cancel-friend-request/${id}`,
      }),
    }),
  }),
});

export const {
  useGetFriendsQuery,
  useGetFriendRequestQuery,
  useSendFriendRequestMutation,
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation,
} = friendsApi;
