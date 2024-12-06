import React, { useState } from "react";
import Manchester from "./components/SignalVisualization/Manchester";
import DifferntialManchester from "./components/SignalVisualization/Differentialmanchester";
import SignalInput from "./components/SignalInput/SignalInput";
import Navbar from "./components/Navbar/Navbar";
import DescriptionBox from "./components/DesciptionBox/DescriptionBox";
import { LuBinary } from "react-icons/lu";
import StopAndWait from "./components/Data-Link/StopAndWait/StopAndWait";

const App = () => {
  const [input, setInput] = useState("100110"); // State updated by SignalInput

  return (
    <div className="app flex  flex-col items-center min-w-screen ">
      <Navbar />
      <div className="container hidden flex-col items-center ">
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
      <div className="container items-center w-[100%] ">
        <StopAndWait />
      </div>
    </div>
  );
};

export default App;
