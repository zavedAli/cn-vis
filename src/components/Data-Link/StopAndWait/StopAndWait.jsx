import React, { useState, useEffect } from "react";
import SenderSection from "./limbs/SenderSection/SenderSection";
import MiddleSection from "./limbs/MiddleSection/MiddleSection";
import ReceiverSection from "./limbs/ReceiverSection/ReceiverSection";

const StopAndWait = () => {
  const [frameSize, setFrameSize] = useState(4);
  const [data, setData] = useState("");
  const [sentFrames, setSentFrames] = useState([]);
  const [isFrameSizeLocked, setIsFrameSizeLocked] = useState(false);
  const [isSendButtonEnabled, setIsSendButtonEnabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(null);

  const handleSend = () => {
    if (!data) return;

    // Add the data to the sentFrames array with initial ack status as null
    setSentFrames((prevFrames) => [
      ...prevFrames,
      { frameSize, data, ack: "pending" },
    ]);
    setData("");

    if (!isFrameSizeLocked) {
      setIsFrameSizeLocked(true);
    }

    // Start the countdown timer
    setCountdown(10);
    setCurrentFrameIndex(sentFrames.length);
  };

  const onAcknowledge = () => {
    setCountdown(0); // Stop the countdown
  };

  // Update the ack value when no action is taken in the receiver section
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (countdown === 0 && currentFrameIndex !== null) {
      console.log("2");
      setSentFrames((prevFrames) => {
        const updatedFrames = [...prevFrames];
        if (updatedFrames[currentFrameIndex]?.ack === "pending") {
          updatedFrames[currentFrameIndex].ack = "failed";
        }
        return updatedFrames;
      });
    }
  }, [countdown, currentFrameIndex]);

  return (
    <div className="flex w-[100%] justify-center items-center container text-sm min-h-screen">
      <div className="p-1 m:p-6 w-[100%] sm:w-[80%] h-[80vh]">
        <h1 className="text-center text-3xl font-semibold text-gray-700 mb-6">
          Stop and Wait Protocol
        </h1>
        <div className="flex h-full">
          <SenderSection
            frameSize={frameSize}
            setFrameSize={setFrameSize}
            isFrameSizeLocked={isFrameSizeLocked}
            setIsFrameSizeLocked={setIsFrameSizeLocked}
            data={data}
            setData={setData}
            setSentFrames={setSentFrames}
            sentFrames={sentFrames}
            isSendButtonEnabled={isSendButtonEnabled}
            setIsSendButtonEnabled={setIsSendButtonEnabled}
            handleSendtoReceiver={handleSend}
          />
          <MiddleSection sentFrames={sentFrames} />
          <ReceiverSection
            countdown={countdown}
            setSentFrames={setSentFrames}
            sentFrames={sentFrames}
            currentFrameIndex={currentFrameIndex}
            setCurrentFrameIndex={setCurrentFrameIndex}
            setCountdown={setCountdown}
          />
        </div>
        {/* Sent Frames Display */}
        <div className="mt-6 bg-gray-100 rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Sent Frames Logs
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            {sentFrames.map((frame, index) => (
              <li key={index}>
                Frame {index + 1}: Data = "{frame.data}", Frame Size ={" "}
                {frame.frameSize}
                <br />
                Status: ACK received = {frame.ack || "Pending"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StopAndWait;
