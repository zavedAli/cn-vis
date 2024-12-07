import React from "react";
import DifferntialManchester from "../components/SignalVisualization/Differentialmanchester";
import Manchester from "../components/SignalVisualization/Manchester";
import DescriptionBox from "../components/DesciptionBox/DescriptionBox";
import SignalInput from "../components/SignalInput/SignalInput";
import { LuBinary } from "react-icons/lu";

const SignalVisualizer = ({ input, setInput }) => {
  return (
    <div>
      {" "}
      <div className="container flex flex-col items-center ">
        <h2 className="flex items-center gap-2 text-center mt-8 text-2xl mb-5 font-semibold">
          Signal Visualizer
          <span className="ring-1 ring-gray-600 rounded-full p-1 text-white bg-slate-600">
            <LuBinary />
          </span>
        </h2>
        {/* Pass the callback to SignalInput */}
        <SignalInput onInputChange={setInput} />
        {/* Use the value passed from SignalInput */}
        <Manchester input={input} />

        <DifferntialManchester input={input} />
        <DescriptionBox encodingType={"manchester"} />
        <DescriptionBox encodingType={"differential_manchester"} />
      </div>
    </div>
  );
};

export default SignalVisualizer;
