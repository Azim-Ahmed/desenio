// import ThreeDots from "@components/Shared/Svg/ThreeDots";

export default function Events() {
  return (
    <div class="col-span-5 overflow-y-auto bg-white shadow-md rounded-lg">
      <div className="flex p-8">
        <div className="flex items-center gap-4 w-full">
          <span>icon</span>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Events</h2>
            <h3>Past: Krazy IT, Alibaba, Daffodil international (DIU)</h3>
          </div>
          <div className="flex items-center ml-auto">
            <span>O</span>
            <div className="flex gap-1 cursor-pointer p-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
