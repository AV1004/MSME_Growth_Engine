import React from "react";
import CompneyInternlogo from "../../images/CompneyIntern logo.png";
import save from "../../images/save.png";
import filter from "../../images/Filter.png";
export default function CompnayHome() {
  return (
    <div>
      <div className="flex flex-col justify-center  h-fit"></div>
      <div className="w-full my-16  border-2 border-gray-300 flex"></div>
      <img src={filter} alt="" className="w-[2rem] absolute top-[9.75rem]" />
      <span>Filter</span>
      <select>
        Location
        <option value="Qualification">Qualification</option>
        <option value="Loaction">Loaction</option>
        <option value="Skills">Skills</option>
        <option value="Experience">Experience</option>
        <option value="Area of Interest">Location</option>
      </select>
      <div className="w-full   border-2 border-gray-300"></div>

      <div className="flex justify-center flex-col mt-10 items-center ">
        <div className="border-2 border-black flex flex-row w-[55rem] rounded-2xl h-[24rem] p-6 justify-center hover:h-[24rem] hover:shadow-3xl  hover:shadow-black mb-[3rem]">
          <div>
            <img
              src={CompneyInternlogo}
              className="h-[7rem] w-[7rem] mb-3"
              alt=""
            />
          </div>
          <div className=" ">
            <div className="flex">
              <p className="font-semibold text-4xl p-3  ">ABC XYZ</p>
              <button>
                <img src={save} alt="" className=" ml-[26rem]" />
              </button>
            </div>
            <p className="font-semibold text-2xl p-3 text-blue-500">BCA</p>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Noida </span>{" "}
            </div>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Skill Set:</span>{" "}
              <span className="font-semibold  ">Basic Computer knowledge </span>
            </div>
            <div className="ml-[0.8rem]">
              <span className="font-semibold text-lg ">Experience: </span>{" "}
              <span className="text-lg ">1 Year</span>
            </div>
            <span className="ml-[0.8rem]  font-semibold text-lg ">
              Area of Interest:{" "}
            </span>
            <span className="">Computer, Coding</span>
            <div className="justify-center flex">
              <button className="mr-[7rem] my-[1.5rem] text-blue-400 rounded-2xl w-[7rem] p-3 border-2 border-blue-500 text-xl">
                View
              </button>
              <button className="mr-[7rem] my-[1.5rem] text-white rounded-2xl w-[7rem] p-3 bg-blue-500 text-xl">
                Hire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
