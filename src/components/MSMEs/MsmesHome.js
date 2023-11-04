import React from "react";
import MSMEphotu1 from "../../images/MSMEHOME photu1.png";
export default function () {
  return (
    <div>
      <p className="font-bold text-4xl text-center m-10">List of MSMEs</p>
      <div className="flex justify-center flex-col  items-center ">
        <div className="border-2 border-black flex flex-row w-[50rem] rounded-2xl h-[30rem] p-6 justify-center hover:h-[31rem] hover:shadow-3xl  hover:shadow-black mb-[3rem]">
          <div>
            <img src={MSMEphotu1} className="h-[8rem] w-[19rem] mb-3" alt="" />
          </div>
          <div className="space-y-2 ">
            <span className="font-semibold text-4xl p-3  ">Kirloskar</span>
            <p className="font-semibold text-2xl p-3">
              Kirloskar is an Indian multinational conglomerate that
              manufactures pumps, engines, compressors, and valves. It is one of
              the largest and most respected engineering companies in India.
            </p>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Product/Service: </span>{" "}
              <span className="text-lg ">Pumps/engine</span>
            </div>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Address:</span>{" "}
              <span className="font-semibold  ">
                Yamuna,Survey No. 98/(3-7), Baner, Pune, 411 045,India
              </span>
            </div>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Contact No:</span>{" "}
              <span className="text-lg ">0123456789</span>
            </div>
            <span className="ml-[0.8rem]  font-semibold text-lg ">URL: </span>
            <button className="text-blue-400 m">
               https://www.kirloskarpumps.com/
            </button>
            <div className="justify-center flex">
              <button className="mr-[7rem] my-[1.5rem] text-white rounded-2xl p-3 bg-blue-500 text-xl">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 border-black flex flex-row w-[50rem] rounded-2xl h-[30rem] p-6 justify-center hover:h-[31rem] hover:shadow-3xl mb-[3rem]   hover:shadow-black ">
          <div>
            <img src={MSMEphotu1} className="h-[8rem] w-[19rem] mb-3" alt="" />
          </div>
          <div className="space-y-2  ">
            <span className="font-semibold text-4xl p-3  ">Kirloskar</span>
            <p className="font-semibold text-2xl p-3">
              Kirloskar is an Indian multinational conglomerate that
              manufactures pumps, engines, compressors, and valves. It is one of
              the largest and most respected engineering companies in India.
            </p>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Product/Service: </span>{" "}
              <span className="text-lg ">Pumps/engine</span>
            </div>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Address:</span>{" "}
              <span className="font-semibold  ">
                Yamuna,Survey No. 98/(3-7), Baner, Pune, 411 045,India
              </span>
            </div>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Contact No:</span>{" "}
              <span className="text-lg ">0123456789</span>
            </div>
            <span className="ml-[0.8rem]  font-semibold text-lg ">URL: </span>
            <button className="text-blue-400 m">
               https://www.kirloskarpumps.com/
            </button>
            <div className="justify-center flex">
              <button className="mr-[7rem] my-[1.5rem] text-white rounded-2xl p-3 bg-blue-500 text-xl">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
