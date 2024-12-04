import React from "react";

const SignalComponentA = () => {
  return (
    <div className="flex flex-col w-[100%] hover:shadow-gray-400 hover:shadow-lg hover:scale-110 transition-all ease-in cursor-pointer ">
      <div className="box w-full h-[95%] bg-slate-200 flex relative">
        <div className="bg-gray-400 w-[2%] h-[100%]"></div>

        <div className="bg-black w-[45%] h-[5%]"></div>
        <div className="bg-black w-[10%] h-[100%]"></div>
        <div className="bg-black w-[45%] h-[5%] absolute bottom-0 left-[55%]"></div>
      </div>
      <p className="h-[5%]">1</p>
    </div>
  );
};

export default SignalComponentA;
