import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import SignalVisualizer from "./pages/SignalVisualizer";
import StopAndWait from "./components/Data-Link/StopAndWait/StopAndWait";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [input, setInput] = useState("100110"); // State updated by SignalInput

  return (
    <div className="app flex  flex-col items-center min-w-screen ">
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={<SignalVisualizer input={input} setInput={setInput} />}
        />
        <Route
          path={"/physical/manchesterE"}
          element={<SignalVisualizer input={input} setInput={setInput} />}
        />
        <Route
          path={"/physical/DmanchesterE"}
          element={<SignalVisualizer input={input} setInput={setInput} />}
        />

        <Route
          path="/dataLink/stopAndWait"
          element={
            <div className="container items-center w-[100%] ">
              <StopAndWait input={input} setInput={setInput} />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
