import React, { useState } from "react";

const SignalInput = ({ onInputChange }) => {
  const [input, setInput] = useState("101010"); // Local state

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[01]*$/.test(value)) {
      setInput(value); // Update local state
      onInputChange(value); // Notify parent about changes
    }
  };

  return (
    <input
      type="text"
      className="ring-1 ring-slate-700 rounded-lg mt-4 px-3 w-80 py-2"
      value={input}
      maxlength="50"
      onChange={handleInputChange}
      placeholder="Enter only 1s and 0s, max length 50"
    />
  );
};

export default SignalInput;
