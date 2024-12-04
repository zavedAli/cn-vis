import React, { useState } from "react";

const EncodingInput = ({ onEncode }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleEncode = (scheme) => {
    if (onEncode) {
      onEncode(input, scheme);
    }
  };

  return (
    <div className="p-4 flex flex-col m-auto justify-center w-[50vw]">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md"
        placeholder="Enter binary data (e.g., 101010)"
      />
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => handleEncode("NRZ")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          NRZ Encoding
        </button>
        <button
          onClick={() => handleEncode("Manchester")}
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Manchester Encoding
        </button>
        <button
          onClick={() => handleEncode("AMI")}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          AMI Encoding
        </button>
      </div>
    </div>
  );
};

export default EncodingInput;
