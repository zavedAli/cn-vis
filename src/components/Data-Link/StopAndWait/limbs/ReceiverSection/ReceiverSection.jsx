import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

const ReceiverSection = ({
  countdown,
  setSentFrames,
  sentFrames,
  currentFrameIndex,
  setCountdown,
}) => {
  const [hideCounter, setHideCounter] = useState(false);
  const handleButtonClick = (ackValue) => {
    setHideCounter(true);
    if (
      currentFrameIndex !== null &&
      currentFrameIndex < sentFrames.length &&
      countdown > 0
    ) {
      setSentFrames((prevFrames) => {
        const updatedFrames = [...prevFrames];
        updatedFrames[currentFrameIndex] = {
          ...updatedFrames[currentFrameIndex],
          ack: ackValue,
        };
        return updatedFrames;
      });
    }
  };

  useEffect(() => {
    setHideCounter(false);

    if (countdown === 0) {
      console.log("1");
      setSentFrames((prevFrames) => {
        if (
          currentFrameIndex !== null &&
          currentFrameIndex < prevFrames.length &&
          prevFrames[currentFrameIndex].ack === "pending"
        ) {
          const updatedFrames = [...prevFrames];
          updatedFrames[currentFrameIndex].ack = "failed";
          return updatedFrames;
        }
        return prevFrames;
      });
    }
  }, [countdown, currentFrameIndex, setSentFrames]);

  return (
    <div className="receiver bg-green-200 rounded-lg p-1 sm:p-2 w-1/2 sm:w-1/4 flex flex-col justify-between">
      <div className="upper flex h-[80%] items-center gap-1 sm:gap-3">
        <div className="bar bg-gray-100 h-full w-[1%] sm:w-[5%] rounded-md shadow-md"></div>
        <div className="overflow-scroll input ring-1 scrollbar-hide ring-white h-full bg-green-500 text-white text-center p-4 w-[99%] sm:w-[95%] rounded-lg shadow-md">
          {sentFrames.length > 0 ? (
            <ul className="flex flex-col gap-3 text-[12px]">
              {sentFrames.map((frame, index) => (
                <span
                  key={index}
                  className="ring-1 min-h-[50px] flex justify-between items-center ring-white bg-white text-green-500 py-1 px-2 rounded-md hover:scale-105 hover:shadow-md transition-all ease-in cursor-pointer"
                >
                  Frame {index + 1}: {frame.data}
                  {frame.ack === "success" && (
                    <span className="text-green-500">
                      <FaCheck />
                    </span>
                  )}
                  {frame.ack === "failed" && (
                    <span className="text-red-500">Failed</span>
                  )}
                  {frame.ack === "duplicate" && (
                    <span className="text-yellow-500">Duplicate</span>
                  )}
                </span>
              ))}
            </ul>
          ) : (
            <span className="ring-1 ring-white py-1 px-5 rounded-md">
              Receiver Data
            </span>
          )}
        </div>
      </div>
      <div className="lower flex justify-between gap-2">
        <button
          className={`w-1/3 bg-red-500 text-white py-2 rounded-lg ${
            countdown > 0 ? "hover:bg-red-600" : "bg-red-300 cursor-not-allowed"
          }`}
          onClick={() => handleButtonClick("failed")}
          disabled={countdown <= 0}
        >
          Failed
        </button>
        <button
          className={`w-1/3 bg-yellow-500 text-white py-2 rounded-lg ${
            countdown > 0
              ? "hover:bg-yellow-600"
              : "bg-yellow-300 cursor-not-allowed"
          }`}
          onClick={() => handleButtonClick("duplicate")}
          disabled={countdown <= 0}
        >
          Duplicate
        </button>
        <button
          className={`w-1/3 bg-green-600 text-white py-2 rounded-lg ${
            countdown > 0
              ? "hover:bg-green-700"
              : "bg-green-300 cursor-not-allowed"
          }`}
          onClick={() => handleButtonClick("success")}
          disabled={countdown <= 0 && !hideCounter}
        >
          Success
        </button>
      </div>
      {countdown > 0 && !hideCounter && (
        <div className="text-center mt-4 text-xl font-bold text-gray-800">
          {countdown} seconds remaining
        </div>
      )}
    </div>
  );
};

export default ReceiverSection;
