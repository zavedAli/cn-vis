import React from "react";
import SignalA from "./../SignalVisualization/SignalA";
import HighVolt from "../../assets/symbols/Manchestor/highVolt.png";
import LowVolt from "../../assets/symbols/Manchestor/lowVolt.png";

const DescriptionBox = () => {
  return (
    <div>
      <div className="w-full p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Manchester Encoding</h1>
        <p className="mb-6 text-center text-gray-600">
          Manchester Encoding is a method of encoding binary data where each bit
          is represented by a transition in the signal. This ensures
          synchronization and makes the data transmission error-resistant.
        </p>

        {/* Signal Visualization */}
        <div className="signal-visualizer flex gap-2 items-center justify-center w-full max-w-4xl border-t-2 border-gray-400 pt-4">
          <img src={HighVolt} className="w-20 shadow-md" alt="" />
          <img src={LowVolt} className="w-20 shadow-md" alt="" />
        </div>

        {/* Legend */}
        <div className="legend mt-4 flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-black"></div>
            <span>High Voltage when bit is 1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-red-500 border border-gray-400"></div>
            <span>Low Voltage when bit is 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
