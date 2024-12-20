import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const SenderSection = ({
  frameSize,
  setFrameSize,
  isFrameSizeLocked,
  setIsFrameSizeLocked,
  data,
  setData,
  setSentFrames,
  sentFrames,
  isSendButtonEnabled,
  setIsSendButtonEnabled,
  handleSendtoReceiver,
}) => {
  const handleFrameSizeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 4 && value <= 10) {
      setFrameSize(value);
    }
  };

  const handleDataChange = (e) => {
    const value = e.target.value;
    if (/^[01]*$/.test(value)) {
      if (value.length <= frameSize) {
        setData(value);
      }
    }
  };

  useEffect(() => {
    // Enable "Send" button only if `data` length equals `frameSize`
    if (data.length === frameSize) {
      setIsSendButtonEnabled(true);
    } else {
      setIsSendButtonEnabled(false);
    }
  }, [data, frameSize, setIsSendButtonEnabled]);

  const handleSend = () => {
    if (!data) return;

    if (!isFrameSizeLocked) {
      setIsFrameSizeLocked(true);
    }
    handleSendtoReceiver();
  };

  const handleReset = () => {
    setSentFrames([]);
    setData("");
    setIsFrameSizeLocked(false);
  };

  return (
    <div className="sender bg-blue-200 rounded-lg p-1 sm:p-2 w-1/2 md:w-1/4  flex flex-col justify-between">
      <div className="upper flex h-[80%] justify-between gap-1 sm:gap-3">
        <div className="input overflow-scroll scrollbar-hide ring-1 ring-white bg-blue-500 text-white text-center p-4 w-[99%] sm:w-[95%] rounded-lg shadow-md">
          {sentFrames.length > 0 ? (
            <ul className="flex flex-col gap-3">
              {sentFrames.map((frame, index) => (
                <span
                  key={index}
                  className="ring-1 justify-between min-h-[50px] text-[12px] ring-white bg-white text-blue-500 py-1 px-5 rounded-md hover:scale-105 hover:shadow-md transition-all ease-in cursor-pointer flex items-center gap-2"
                >
                  Frame {index + 1}: {frame.data}
                  {frame.ack === "success" && <FaCheck />}
                  {frame.ack === "failed" && <IoClose className="scale-110" />}
                  {frame.ack === "duplicate" && (
                    <IoClose className="scale-110" />
                  )}
                </span>
              ))}
            </ul>
          ) : (
            <span className="ring-1 ring-white py-1 px-5 rounded-md">
              Sender Data
            </span>
          )}
        </div>
        <div className="bar bg-gray-100 h-full w-[1%] sm:w-[5%] rounded-md shadow-md"></div>
      </div>
      <div className="lower  flex flex-col gap-2 w-[100%]">
        <div className="flex gap-1 text-blue-800 font-semibold">
          <div className="flex flex-col w-1/3">
            <label htmlFor="frameSize" className="ps-1">
              Frame Size
            </label>
            <input
              id="frameSize"
              type="number"
              value={frameSize}
              min={4}
              max={10}
              onChange={handleFrameSizeChange}
              disabled={isFrameSizeLocked}
              className={`w-full px-2 py-1 border rounded-lg focus:outline-blue-400 ${
                isFrameSizeLocked ? "bg-gray-200 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="flex flex-col w-2/3">
            <label htmlFor="data" className="ps-1">
              Data
            </label>
            <input
              id="data"
              type="text"
              value={data}
              onChange={handleDataChange}
              placeholder={`Enter exactly ${frameSize} bits`}
              className="w-full px-2 py-1 border rounded-lg focus:outline-blue-400"
            />
          </div>
        </div>
        <div className="flex gap-1">
          <button
            onClick={handleSend}
            disabled={!isSendButtonEnabled}
            className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 ${
              !isSendButtonEnabled ? "bg-blue-400 cursor-not-allowed" : ""
            }`}
          >
            Send
          </button>
          <button
            onClick={handleReset}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SenderSection;
