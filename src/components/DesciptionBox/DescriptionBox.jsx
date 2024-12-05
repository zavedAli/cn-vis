import React from "react";
import DesInfo from "../../data/DesInfo.json";
import manchesterHighVolt from "../../assets/symbols/Manchestor/highVolt.png";
import manchesterLowVolt from "../../assets/symbols/Manchestor/lowVolt.png";
import differentialHighVoltA from "../../assets/symbols/DifferentialM/Diff1A.png";
import differentialHighVoltB from "../../assets/symbols/DifferentialM/Diff1B.png";
import differentialLowVoltA from "../../assets/symbols/DifferentialM/Diff0A.png";
import differentialLowVoltB from "../../assets/symbols/DifferentialM/Diff0B.png";

const imageMapping = {
  manchesterHighVolt,
  manchesterLowVolt,
  differentialHighVoltA,
  differentialHighVoltB,
};

const DescriptionBox = ({ encodingType }) => {
  const encodingData = DesInfo.find((enc) => enc.id === encodingType);

  if (!encodingData) {
    return <p className="text-red-500">Encoding type not found.</p>;
  }

  return (
    <div>
      <div className="w-full p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">{encodingData.title}</h1>
        <p className="mb-6 text-center text-gray-600">
          {encodingData.description}
        </p>

        {/* Signal Visualization */}
        <div className="signal-visualizer flex gap-2 items-center justify-center w-full max-w-4xl border-t-2 border-gray-400 pt-4">
          <img
            src={imageMapping[encodingData.highVoltKey]}
            className="w-20 shadow-md"
            alt="High Voltage"
          />
          <img
            src={imageMapping[encodingData.lowVoltKey]}
            className="w-20 shadow-md"
            alt="Low Voltage"
          />
        </div>

        {/* Legend */}
        <div className="legend mt-4 flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-black"></div>
            <span>{encodingData.highVoltText}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-red-500 border border-gray-400"></div>
            <span>{encodingData.lowVoltText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
