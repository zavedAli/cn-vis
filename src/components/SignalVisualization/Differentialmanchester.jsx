import React from "react";
import SignalComponentA from "./Signals/SignalA";
import SignalComponentB from "./Signals/SignalB";
import SignalAto from "./Signals/SignalAto";
import SignalBto from "./Signals/SignalBto";
import { BsArrowRightCircle } from "react-icons/bs";

const DifferentialManchester = ({ input }) => {
  let prev = null; // To track the previous signal

  return (
    <div className="flex flex-col bg-slate-100 sm:flex-row py-3 px-3 w-[90%] my-10 shadow-lg rounded-lg ring-1 ring-gray-200">
      <h1 className="flex me-4 my-5 items-center h-14 gap-4 w-full sm:w-1/4 justify-center">
        Differential M. Encoding
        <span className="scale-150 hidden sm:flex">
          <BsArrowRightCircle />
        </span>
      </h1>
      <div className="flex w-[100%] pb-2 mb-5 sm:mb-0">
        {input.split("").map((bit, index) => {
          if (prev === null) {
            // Initial case when `prev` is null
            if (bit === "1") {
              prev = "SignalComponentA";
              return (
                <SignalComponentA key={index} color={"black"} bitSignal={bit} />
              );
            } else if (bit === "0") {
              prev = "SignalAto";
              return <SignalAto key={index} color={"red"} bitSignal={bit} />;
            }
          } else {
            // Cases when `prev` is not null
            if (bit === "1") {
              if (prev === "SignalAto") {
                prev = "SignalComponentB";
                return (
                  <SignalComponentB
                    key={index}
                    color={"black"}
                    bitSignal={bit}
                  />
                );
              } else if (prev === "SignalBto") {
                prev = "SignalComponentA";
                return (
                  <SignalComponentA
                    key={index}
                    color={"black"}
                    bitSignal={bit}
                  />
                );
              } else if (prev === "SignalComponentA") {
                prev = "SignalComponentB";
                return (
                  <SignalComponentB
                    key={index}
                    color={"black"}
                    bitSignal={bit}
                  />
                );
              } else if (prev === "SignalComponentB") {
                prev = "SignalComponentA";
                return (
                  <SignalComponentA
                    key={index}
                    color={"black"}
                    bitSignal={bit}
                  />
                );
              }
            } else if (bit === "0") {
              if (prev === "SignalComponentA") {
                prev = "SignalAto";
                return <SignalAto key={index} color={"red"} bitSignal={bit} />;
              } else if (prev === "SignalComponentB") {
                prev = "SignalBto";
                return <SignalBto key={index} color={"red"} bitSignal={bit} />;
              } else if (prev === "SignalAto") {
                prev = "SignalAto";
                return <SignalAto key={index} color={"red"} bitSignal={bit} />;
              } else if (prev === "SignalComponentB") {
                prev = "SignalBto";
                return <SignalBto key={index} color={"red"} bitSignal={bit} />;
              } else if (prev === "SignalBto") {
                prev = "SignalBto";
                return <SignalBto key={index} color={"red"} bitSignal={bit} />;
              }
            }
          }
        })}
      </div>
    </div>
  );
};

export default DifferentialManchester;
