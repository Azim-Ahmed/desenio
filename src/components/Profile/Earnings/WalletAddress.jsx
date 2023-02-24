import { useGetProfileQuery } from "features/profile/profileApi";

export default function WalletAddress() {
  const { data, isFetching } = useGetProfileQuery();
  //   const [editing, setEditing] = useState(false);
  //   const [value, setValue] = useState("");

  //   const handleEditing = () => {
  //     setEditing(!editing);
  //   };

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //   };

  //   useEffect(() => {
  //     if (editing || isFetching) return;
  //     const v = data.data.wallet_address || "";
  //     setValue(v);
  //   }, [editing]);

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
      <div className="flex p-8">
        <div className="flex items-center gap-4 w-full">
          {false ? (
            <input
              //   value={value}
              //   onChange={handleChange}
              type="text"
              className="w-full border-0 border-b text-base p-2 outline-none focus:outline-0 focus:ring-0"
            />
          ) : (
            <p className="w-full text-base p-2">
              {data?.data?.wallet_address || (
                <span className="text-red-700">No Wallet Connected</span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
