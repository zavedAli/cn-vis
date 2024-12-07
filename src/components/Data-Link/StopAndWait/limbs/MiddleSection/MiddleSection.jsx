import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const MiddleSection = ({ sentFrames }) => {
  return (
    <div className="middle hidden rounded-lg mx-6 md:flex flex-col justify-center w-1/3 md:w-2/4 ">
      <span className="text-gray-600 text-xl h-[80%] font-medium bg-white w-[100%] py-2 ring-1 ring-gray-500 rounded-md overflow-scroll scrollbar-hide">
        {sentFrames.map((frame, index) => (
          <div
            key={index}
            className=" text-[10px] py-1 flex flex-col  justify-center mx-4"
          >
            <div className="outgoing flex items-center">
              <div className="h-[1px] w-[40%] bg-gray-500"></div>
              <span className="w-[20%] text-center ">
                Frame {index + 1}: {frame.data}
              </span>
              <div className="h-[1px] w-[40%] bg-gray-500"></div>
              <FaChevronRight />
            </div>
            <div className="incoming flex items-center">
              <FaChevronLeft />
              <div className="h-[1px] w-[40%] bg-gray-500"></div>
              <span className="w-[20%] p-0 text-center ">ACK: {frame.ack}</span>

              <div className="h-[1px] w-[40%] bg-gray-500"></div>
            </div>
          </div>
        ))}
      </span>
      <div className="flex flex-col gap-1 text-sm h-[20%] mt-4 shadow-lg p-3 bg-white capitalize">
        <h3 className="text-red-500">
          Congested:{" "}
          <span className="text-gray-700">
            node is busy and can not receive frame at the moment{" "}
          </span>
        </h3>
        <h3 className="text-yellow-500">
          Duplicate:{" "}
          <span className="text-gray-700">Frame is already received</span>
        </h3>
        <h3 className="text-green-500">
          Success:{" "}
          <span className="text-gray-700">Node Can Accept the Frame</span>
        </h3>
      </div>
    </div>
  );
};

export default MiddleSection;
