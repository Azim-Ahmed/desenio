import * as React from "react";
import personImg from "../../assets/images/beautiful-fashionable-girl-denim-cap-red-lips-glamor-fashion-color-background-unaltered 1.png";
import modelImg from "../../assets/images/model.png";

const ViewStory = () => {
  return (
    <div className="w-full px-5 pt-2 mt-2 flex-1">
      <div className={`w-full relative h-96 mt-2`}>
        {/* progress */}
        <div className="flex space-x-2 absolute -top-3 left-0  w-full">
          {[1, 2].map((item, index) => (
            <div className="rounded-full w-1/2 h-1 bg-gray-500">
              <div className="w-1/2 h-full bg-[#7928ca]"></div>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundImage: `url(${modelImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            filter: "blur(30px)",
            pointerEvents: "none",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "none",
          }}
        />

        <div className="absolute h-full w-full">
          <img
            src={modelImg}
            alt="model"
            className="w-full h-full object-contain"
            style={{
              pointerEvents: "none",
            }}
          />
        </div>

        <div className="w-full absolute top-0 left-0 px-2 pt-2 flex flex-col items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <div
                className="w-14 h-14 rounded-full p-1 mr-2"
                style={{
                  border: "1px solid #fff",
                }}
              >
                <img
                  src={personImg}
                  alt="person"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-black font-bold">Janelliya will</span>
                <span className="text-gray-700 text-sm">1 hour ago</span>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStory;
