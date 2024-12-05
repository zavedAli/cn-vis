import React from "react";

const SignalComponentB = ({ color, bitSignal }) => {
  return (
    <div className="flex flex-col w-[100%] hover:shadow-blue-300 hover:shadow-lg hover:scale-110 transition-all ease-in cursor-pointer">
      <div className="box w-full h-full bg-slate-200 flex relative">
        <div
          className="bg-[color] w-[45%] h-[5%] absolute bottom-0"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="bg-[color] w-[10%] h-[100%] absolute left-[45%]"
          style={{ backgroundColor: color }}
        ></div>
        <div
          className="bg-[color] w-[45%] h-[5%] absolute top-0 left-[55%]"
          style={{ backgroundColor: color }}
        ></div>
        <div className="bg-gray-400 w-[2%] h-[100%]"></div>
      </div>
      <p className="h-[5%] ms-2 " style={{ color: color }}>
        {bitSignal}
      </p>
    </div>
  );
};

export default SignalComponentB;
