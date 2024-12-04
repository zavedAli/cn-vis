import React from "react";
import SignalComponentA from "./SignalA";
import SignalComponentB from "./SignalB";
import { BsArrowRightCircle } from "react-icons/bs";

const SignalVisualization = ({ input }) => {
  let prev = null; // To track the previous bit

  return (
    <div className="flex py-3 px-3 w-[90%] my-10 shadow-lg rounded-lg">
      <h1 className="flex me-4 my-5 items-center gap-4 w-1/4">
        Manchester Encoding
        <span className="scale-150">
          <BsArrowRightCircle />
        </span>
      </h1>
      {input.split("").map((bit, index) => {
        // Determine if the current bit matches the previous bit
        const isMatch = prev === bit;

        // Update prev after the rendering logic
        prev = bit;

        return (
          <div key={index} className="flex w-[90%] pb-2 mt-3">
            {/* Display an extra div if the current bit matches the previous one */}
            {isMatch && <div className="bg-black h-[95%] w-[10%]"></div>}
            {/* Display the appropriate signal component */}
            {bit === "1" ? <SignalComponentA /> : <SignalComponentB />}
          </div>
        );
      })}
    </div>
  );
};

export default SignalVisualization;
