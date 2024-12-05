import React from "react";

const SignalBto = ({ color, bitSignal }) => {
  return (
    <div className="flex w-[100%] cursor-pointer flex-col transition-all ease-in hover:scale-110 hover:shadow-lg hover:shadow-blue-300">
      <div className="box relative flex h-full w-full bg-slate-200">
        <div
          className="absolute bottom-0 h-[5%] w-[45%]"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="absolute left-[45%] h-[100%] w-[10%]"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="absolute left-[55%] top-0 h-[5%] w-[45%]"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="h-[100%] w-[8%]"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <p className="ms-2 h-[5%] text-red-400" style={{ color: color }}>
        {bitSignal}
      </p>
    </div>
  );
};

export default SignalBto;
