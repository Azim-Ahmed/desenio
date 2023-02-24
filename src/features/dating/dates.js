const { apiSlice } = require("features/Api/apiSlice");

const homeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDatingProfiles: builder.query({
      query: () => ({
        url: "/date-profiles",
      }),
    }),
  }),
});

export const { useGetDatingProfilesQuery } = homeApi;
