import React from "react";

const SignalComponentB = () => {
  return (
    <div className="flex flex-col w-[100%] hover:shadow-red-400  hover:shadow-lg hover:scale-110 transition-all ease-in cursor-pointer">
      <div className="box w-full h-full bg-slate-200 flex relative">
        <div className="bg-red-600 w-[45%] h-[5%] absolute bottom-0"></div>
        <div className="bg-red-600 w-[10%] h-[100%] absolute left-[45%]"></div>
        <div className="bg-red-600 w-[45%] h-[5%] absolute top-0 left-[55%]"></div>
        <div className="bg-gray-400 w-[2%] h-[100%]"></div>
      </div>
      <p className="h-[5%] ms-2 text-red-400">0</p>
    </div>
  );
};

export default SignalComponentB;
