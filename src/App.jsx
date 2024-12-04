import React, { useState } from "react";
import SignalVisualization from "./components/SignalVisualization/SignalVisualization";
import { LuBinary } from "react-icons/lu";
const App = () => {
  const [input, setInput] = useState("101010");

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Validate input: only allow '1' and '0'
    if (/^[01]*$/.test(value)) {
      setInput(value);
    }
  };

  return (
    <div className="app flex justify-center">
      <div className="container flex flex-col items-center">
        <h2 className="flex items-center gap-2 text-center mt-8 text-4xl mb-5 font-semibold">
          Signal Visualizer
          <span className="ring-1 ring-gray-600  rounded-full p-1 text-white bg-slate-600">
            <LuBinary />
          </span>
        </h2>
        <input
          type="text "
          className="ring-1 ring-slate-700 rounded-lg mt-4 px-3 w-60 py-2"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter only 1s and 0s"
        />
        <SignalVisualization input={input} />
      </div>
    </div>
  );
};
{
  /* <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className=""
          placeholder="Enter only 1s and 0s"
        /> */
}
export default App;
