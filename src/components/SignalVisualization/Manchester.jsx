import React from "react";
import SignalComponentA from "./Signals/SignalA";
import SignalComponentB from "./Signals/SignalB";
import { BsArrowRightCircle } from "react-icons/bs";

const SignalVisualization = ({ input }) => {
  let prev = null; // To track the previous bit

  return (
    <div className="flex flex-col sm:flex-row py-3 px-3 w-[90%] my-10 shadow-lg rounded-lg ring-1 ring-gray-200">
      <h1 className="flex me-4 my-5 items-center h-14 gap-4 w-full sm:w-1/4 justify-center">
        Manchester Encoding
        <span className="scale-150 hidden sm:flex">
          <BsArrowRightCircle />
        </span>
      </h1>
      <div className="flex w-[100%] ">
        {input.split("").map((bit, index) => {
          // Determine if the current bit matches the previous bit
          const isMatch = prev === bit;

          // Update prev after the rendering logic
          prev = bit;

          return (
            <div key={index} className="flex w-[100%] pb-2 mb-5 sm:mb-0">
              {/* Display an extra div if the current bit matches the previous one */}
              {isMatch && bit === "0" && (
                <div className="bg-red-600 h-[95%] w-[10%]"></div>
              )}
              {isMatch && bit === "1" && (
                <div className="bg-black h-[95%] w-[10%]"></div>
              )}

              {/* Display the appropriate signal component */}
              {bit === "1" ? (
                <SignalComponentA color={"black"} bitSignal={"1"} />
              ) : (
                <SignalComponentB color={"red"} bitSignal={"0"} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SignalVisualization;
