import React, { useState } from "react";
import SignalVisualization from "./components/SignalVisualization/SignalVisualization";
import SignalInput from "./components/SignalInput/SignalInput";
import Navbar from "./components/Navbar/Navbar";
import DescriptionBox from "./components/DesciptionBox/DescriptionBox";
import { LuBinary } from "react-icons/lu";

const App = () => {
  const [input, setInput] = useState("101010"); // State updated by SignalInput

  return (
    <div className="app flex  flex-col items-center min-w-screen">
      <Navbar />
      <div className="container flex flex-col items-center">
        <h2 className="flex items-center gap-2 text-center mt-8 text-4xl mb-5 font-semibold">
          Signal Visualizer
          <span className="ring-1 ring-gray-600 rounded-full p-1 text-white bg-slate-600">
            <LuBinary />
          </span>
        </h2>
        {/* Pass the callback to SignalInput */}
        <SignalInput onInputChange={setInput} />
        {/* Use the value passed from SignalInput */}
        <SignalVisualization input={input} />
        <DescriptionBox />
      </div>
    </div>
  );
};

export default App;
