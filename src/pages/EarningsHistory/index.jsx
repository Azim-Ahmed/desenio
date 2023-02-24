import SocialLeftBar from "components/Home/SocialLeftBar/SocialLeftBar";
import { useGetTransactionsQuery } from "features/transactions/transactionsApi";
/**
 *@function EarningsHistory.jsx
 *@author Azim
 *
 **/

const EarningsHistory = (props) => {
  const { data, isFetching, isLoading } = useGetTransactionsQuery();

  return (
    <div
      className={`bg-white text-black dark:bg-gray-800 dark:text-white ${
        !props.profile ? "" : "col-span-5"
      }`}
    >
      <div className="px-2">
        <div class="grid grid-cols-6 gap-4 relative">
          {!props.profile ? (
            <div class="col-span-1 h-screen overflow-y-auto sticky top-0">
              <SocialLeftBar />
            </div>
          ) : (
            ""
          )}

          <div
            className={`dark:bg-gray-800 ${
              !props.profile ? "" : "col-span-6 py-4"
            }`}
          >
            <div className="bg-blue-100 border-b mb-3 p-3 shadow-md">
              <h1 className="text-xl text-blue-600 font-semibold">
                Transactions list
              </h1>
            </div>

            <div>
              {isFetching || isLoading ? (
                <div class="flex justify-center items-center mt-3">
                  <div
                    class="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-900 dark:border-gray-100"
                    style={{
                      borderBottom: "2px solid",
                    }}
                  ></div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                      <div className="overflow-hidden border">
                        <table className="min-w-full divide-y divide-gray-900">
                          <thead
                            className="bg-gray-50 dark:bg-gray-800 border-collapse"
                            style={{
                              borderCollapse: "collapse",
                            }}
                          >
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold text-left text-gray-700 dark:text-gray-200"
                              >
                                SL
                              </th>

                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold text-left text-gray-700 dark:text-gray-200"
                              >
                                Amount
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold text-left text-gray-700 dark:text-gray-200"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold text-left text-gray-700 dark:text-gray-200"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold text-left text-gray-700 dark:text-gray-200"
                              >
                                Transaction customer id
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold text-left text-gray-700 dark:text-gray-200"
                              >
                                Created at
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {data?.data?.map((item, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                  {index + 1}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                  {item.amount}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                  {item.type}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                  {item.status}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                  {item.transaction_cus_id}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">
                                  {item.created_at}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsHistory;
