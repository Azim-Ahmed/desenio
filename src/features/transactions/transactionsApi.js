const { apiSlice } = require("features/Api/apiSlice");

const transactionsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getTransactions: builder.query({
      query: () => ({
        url: "/transactions",
      }),
      providesTags: (_) => ["getTrancations"],
    }),
  }),
});

export const {
  useGetTransactionsQuery
} = transactionsApi;
export default transactionsApi;