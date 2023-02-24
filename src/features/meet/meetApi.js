const { apiSlice } = require("features/Api/apiSlice");

const meetApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMeetLinks: builder.query({
      query: () => ({
        url: "/meet-links",
      }),
    }),
    getNewMeet: builder.mutation({
      query: () => ({
        url: "/generate/meet-link",
      }),
    }),
  }),
});

export const { useGetMeetLinksQuery, useGetNewMeetMutation } = meetApi;
