import React, { useEffect } from "react";

const ReceiverSection = ({
  countdown,
  setSentFrames,
  sentFrames,
  currentFrameIndex,
  setCountdown,
}) => {
  const handleButtonClick = (ackValue) => {
    if (currentFrameIndex !== null && currentFrameIndex < sentFrames.length) {
      setSentFrames((prevFrames) => {
        const updatedFrames = [...prevFrames];
        updatedFrames[currentFrameIndex] = {
          ...updatedFrames[currentFrameIndex],
          ack: ackValue,
        };
        return updatedFrames;
      });

      // Stop the countdown when a button is clicked
      setCountdown(0);
    }
  };

  // Effect to handle countdown and set ack to "failed" if no button is clicked
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (countdown === 0) {
      setSentFrames((prevFrames) => {
        if (
          currentFrameIndex !== null &&
          currentFrameIndex < prevFrames.length &&
          prevFrames[currentFrameIndex].ack === null
        ) {
          const updatedFrames = [...prevFrames];
          updatedFrames[currentFrameIndex] = {
            ...updatedFrames[currentFrameIndex],
            ack: "failed",
          };
          return updatedFrames;
        }
        return prevFrames;
      });
    }
  }, [countdown, currentFrameIndex, setCountdown, setSentFrames]);

  // Filter frames with ack as "success"
  const successfulFrames = sentFrames.filter(
    (frame) => frame.ack === "success"
  );

  return (
    <div className="receiver bg-green-200 rounded-lg p-1 sm:p-4 w-1/2 sm:w-1/4 flex flex-col justify-between">
      <div className="upper flex h-[80%] items-center gap-3">
        <div className="bar bg-gray-100 h-full w-[1%] sm:w-[10%] rounded-md shadow-md "></div>
        <div className="input ring-1 ring-white h-full bg-green-500 text-white text-center p-4 w-[99%] sm:w-[85%] rounded-lg shadow-md">
          {successfulFrames.length > 0 ? (
            <ul className="flex flex-col gap-1">
              {successfulFrames.map((frame, index) => (
                <span
                  key={index}
                  className="ring-1 ring-white bg-white text-green-500 py-1 px-5 rounded-md hover:scale-105 hover:shadow-md transition-all ease-in cursor-pointer"
                >
                  Frame {index + 1}: {frame.data}
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
          disabled={countdown <= 0}
        >
          Success
        </button>
      </div>
      {countdown > 0 && (
        <div className="text-center mt-4 text-xl font-bold text-gray-800">
          {countdown} seconds remaining
        </div>
      )}
    </div>
  );
};

export default ReceiverSection;
