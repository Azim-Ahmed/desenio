const { apiSlice } = require("features/Api/apiSlice");



const homeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomeProfiles: builder.query({
      query: () => ({
        url: "/get-profiles",
      }),
    }),
    homePagePost: builder.query({
      query: () => ({
        url: "/post/newsfeed",
      }),
      providesTags: (_) => ["homePosts"],
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
  useGetHomeProfilesQuery,
  useHomePagePostQuery,
useCreateHomePostMutation,
  useGetPostQuery,
} = homeApi;
export default homeApi;
