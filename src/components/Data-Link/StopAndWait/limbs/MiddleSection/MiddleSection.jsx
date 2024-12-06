import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const MiddleSection = ({ sentFrames }) => {
  return (
    <div className="middle hidden bg-gray-300 rounded-lg mx-6 sm:flex justify-center w-1/3 sm:w-2/4">
      <span className="text-gray-600 text-xl font-medium bg-white w-[100%] py-2 ring-1 ring-gray-500 rounded-md ">
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
    </div>
  );
};

export default MiddleSection;
