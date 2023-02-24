import { useGetProfileQuery } from "features/profile/profileApi";

export default function TotalBalance() {
  const { data, isFetching } = useGetProfileQuery();
  if (isFetching) {
    return (
      <div class="col-span-5 overflow-y-auto bg-white shadow-md rounded-lg">
        <div className="flex p-8">
          <div className="flex items-center gap-4 w-full">
            <span className="w-full h-6 bg-gray-300 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div class="col-span-5 overflow-y-auto bg-white shadow-md rounded-lg">
        <h4 className='text-center mt-4'>My Balance</h4>
      <div className="flex p-8 justify-between">
        <div className="flex items-center gap-4 w-full">
          USD Balance: ${data?.data?.balance ? data?.data?.balance*2.5 : 0}
        </div>
        <div className="flex items-center gap-4 w-full justify-end">
        MTV Balance: {data?.data?.balance ? data?.data?.balance : 0}MTV
        </div>
      </div>
    </div>
  );
}
