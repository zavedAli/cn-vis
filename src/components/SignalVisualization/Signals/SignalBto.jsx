import React from "react";

const SignalBto = () => {
  return (
    <div className="flex w-[100%] h-[500px] cursor-pointer flex-col transition-all ease-in hover:scale-110 hover:shadow-lg hover:shadow-red-400">
      <div className="box relative flex h-full w-full bg-slate-200">
        <div className="absolute bottom-0 h-[5%] w-[45%] bg-red-600"></div>
        <div className="absolute left-[45%] h-[100%] w-[10%] bg-red-600"></div>
        <div clasName="absolute left-[55%] top-0 h-[5%] w-[45%] bg-red-600"></div>
        <div clasName="h-[100%] w-[8%] bg-red-600"></div>
      </div>
      <p className="ms-2 h-[5%] text-red-400">0</p>
    </div>
  );
};

export default SignalBto;
