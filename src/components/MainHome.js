import React from "react";
import photu from "../images/MSME home.png";
import feature1 from "../images/FeaturesMSME1.png";
import feature2 from "../images/features2.png";
import feature3 from "../images/features3.png";
import usericon from "../images/user icon.png";

export default function MainHome() {
  return (
    <div>
      {/* header photu  */}
      <div>
        <img className="h-[29rem] w-[107rem]" src={photu} alt="" />
      </div>

      <p className="font-bold text-4xl text-center my-12">The Featured MSMES</p>

      {/* features cards  */}
      <div className="flex justify-center space-x-12 p-5 ">
        <div className=" hover:h-[30rem] hover:shadow-2xl  hover:shadow-black  shadow-gray-300 transition-all h-[24rem] w-[21rem] border-2 border-black p-2 space-y-2   items-center flex flex-col rounded-xl">
          <img src={feature1} className="mt-9" alt="" />
          <span className="font-bold text-2xl mt-3 ">Kirloskar</span>
          <div className="flex flex-row ">
            <span className="">Link:</span>

            <button className="underline text-blue-600">Kirloskar</button>
          </div>
          <p className="text-center font-medium text-lg hover:text-xl overflow-hidden">
            Kirloskar is an Indian multinational conglomerate that manufactures
            pumps, engines, compressors, and valves. It is one of the largest
            and most respected engineering companies in India.
          </p>
        </div>

        <div className="h-[24rem] hover:shadow-2xl  hover:shadow-black transition-all hover:h-[30rem] w-[21rem] border-2 border-black p-2 space-y-2  items-center flex flex-col rounded-xl">
          <img src={feature2} className="mt-[52px]" alt="" />
          <span className="font-bold text-2xl mt-[23px] ">Neo Techniques</span>
          <div className="flex flex-row ">
            <span className="">Link:</span>

            <button className="underline text-blue-600">Neo Techniques</button>
          </div>
          <p className="text-center font-medium text-lg overflow-hidden hover:text-xl">
            "Neo Techniques" provides essential industrial products like air
            compressors, solenoid valves, lubricants, and more, widely used in
            cement, chemical, pharmaceutical, engineering, defense, and power
            plant sectors.
          </p>
        </div>
        <div className="h-[24rem] hover:shadow-2xl hover:shadow-black transition-all  hover:h-[30rem] w-[21rem] border-2 border-black p-2 space-y-2  items-center flex flex-col rounded-xl">
          <img src={feature3} className="mt-9" alt="" />
          <span className="font-bold text-2xl mt-3 ">POWERGEN India</span>
          <div className="flex flex-row ">
            <span className="">Link:</span>

            <button className="underline text-blue-600">POWERGEN India</button>
          </div>
          <p className="text-center font-medium text-lg overflow-hidden hover:text-xl">
            POWERGEN India and co-located Indian Utility Week & DISTRIBUTECH
            India will provide high-quality regional buyers across the entire
            end-to-end value chain of power generation, distribution and digital
            transformation.
          </p>
        </div>
        <div className="h-[24rem] hover:shadow-2xl hover:shadow-black transition-all  hover:h-[30rem] w-[21rem] border-2 border-black p-2 space-y-2  items-center flex flex-col rounded-xl">
          <img src={feature3} className="mt-9" alt="" />
          <span className="font-bold text-2xl mt-3 ">POWERGEN India</span>
          <div className="flex flex-row ">
            <span className="">Link:</span>

            <button className="underline text-blue-600">POWERGEN India</button>
          </div>
          <p className="text-center font-medium text-lg overflow-hidden hover:text-xl">
            POWERGEN India and co-located Indian Utility Week & DISTRIBUTECH
            India will provide high-quality regional buyers across the entire
            end-to-end value chain of power generation, distribution and digital
            transformation.
          </p>
        </div>
        <div className="h-[24rem] hover:shadow-2xl hover:shadow-black transition-all  hover:h-[30rem] w-[21rem] border-2 border-black p-2 space-y-2  items-center flex flex-col rounded-xl">
          <img src={feature3} className="mt-9" alt="" />
          <span className="font-bold text-2xl mt-3 ">POWERGEN India</span>
          <div className="flex flex-row ">
            <span className="">Link:</span>

            <button className="underline text-blue-600">POWERGEN India</button>
          </div>
          <p className="text-center font-medium text-lg overflow-hidden hover:text-xl">
            POWERGEN India and co-located Indian Utility Week & DISTRIBUTECH
            India will provide high-quality regional buyers across the entire
            end-to-end value chain of power generation, distribution and digital
            transformation.
          </p>
        </div>
      </div>
      <div className="w-[105.5rem] h-[18rem] bg-blue-500 text-white justify-center text-center flex text-3xl  mt-[5rem] mb-[5rem] items-center  ">
        <div>
          <p className="mx-28 my-8">4,93,288</p>
          <p className="mx-28 my-8">Jobseeker</p>
          <p className="mx-28 my-8">53,634 (Active)</p>
        </div>
        <div className="h-[12rem] w-1 bg-white"></div>
        <div>
          <p className="mx-28 my-8">6,601</p>
          <p className="mx-28 my-8">Recruiter</p>
          <p className="mx-28 my-8">2,434 (Active)</p>
        </div>
        <div className="h-[12rem] w-1 bg-white"></div>
        <div>
          <p className="mx-28 my-8">36,357</p>
          <p className="mx-28 my-8">Jobseeker</p>
          <p className="mx-28 my-8">are placed</p>
        </div>
        <div className="h-[12rem] w-1 bg-white"></div>
        <div>
          <p className="mx-28 my-8">4,93,288</p>
          <p className="mx-28 my-8">Job</p>
          <p className="mx-28 my-8">Posted</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-4xl text-center my-14">
          What Job-seekers say about US
        </p>
      </div>
      <div className="flex justify-center space-x-11">
        <div className="hover:shadow-2xl items-center hover:shadow-black transition-all  hover:h-[25rem]   h-[22rem] w-[16rem]  border-2 border-black p-2 space-y-2 justify-center   rounded-xl ">
          <div className="flex item-center ">
            <img src={usericon} className="w-[5rem]" alt="" />
            <span className="font-bold item-center flex text-xl ml-10 ">
              ABC_XYZ
            </span>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-lg text-center mt-10 hover:text-xl">
              “I Used MSME Growth Engine Portal and I got Job within a week. The
              Portal give me all the information about the position, Location
              and sent off my resume. ”
            </p>
          </div>
        </div>
        <div className="hover:shadow-2xl items-center hover:shadow-black transition-all  hover:h-[25rem]   h-[22rem] w-[16rem]  border-2 border-black p-2 space-y-2 justify-center   rounded-xl ">
          <div className="flex item-center ">
            <img src={usericon} className="w-[5rem]" alt="" />
            <span className="font-bold item-center flex text-xl ml-10 ">
              ABC_XYZ
            </span>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-lg text-center mt-10 hover:text-xl">
              “I Used MSME Growth Engine Portal and I got Job within a week. The
              Portal give me all the information about the position, Location
              and sent off my resume. ”
            </p>
          </div>
        </div>
        <div className="hover:shadow-2xl items-center hover:shadow-black transition-all  hover:h-[25rem]   h-[22rem] w-[16rem]  border-2 border-black p-2 space-y-2 justify-center   rounded-xl ">
          <div className="flex item-center ">
            <img src={usericon} className="w-[5rem]" alt="" />
            <span className="font-bold item-center flex text-xl ml-10 ">
              ABC_XYZ
            </span>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-lg text-center mt-10 hover:text-xl">
              “I Used MSME Growth Engine Portal and I got Job within a week. The
              Portal give me all the information about the position, Location
              and sent off my resume. ”
            </p>
          </div>
        </div>
        <div className="hover:shadow-2xl items-center hover:shadow-black transition-all  hover:h-[25rem]   h-[22rem] w-[16rem]  border-2 border-black p-2 space-y-2 justify-center   rounded-xl ">
          <div className="flex item-center ">
            <img src={usericon} className="w-[5rem]" alt="" />
            <span className="font-bold item-center flex text-xl ml-10 ">
              ABC_XYZ
            </span>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-lg text-center mt-10 hover:text-xl">
              “I Used MSME Growth Engine Portal and I got Job within a week. The
              Portal give me all the information about the position, Location
              and sent off my resume. ”
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-4xl text-center my-14">
          What Companies say about US
        </p>
      </div>
      <div className="flex justify-center space-x-11 mb-12">
        <div className="hover:shadow-2xl items-center hover:shadow-black transition-all  hover:h-[25rem]   h-[22rem] w-[16rem]  border-2 border-black p-2 space-y-2 justify-center   rounded-xl ">
          <div className="flex item-center ">
            <img src={usericon} className="w-[5rem]" alt="" />
            <span className="font-bold item-center flex text-xl ml-10 ">
              ABC_XYZ
            </span>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-lg text-center mt-10 hover:text-xl">
              “I Used MSME Growth Engine Portal and I got Job within a week. The
              Portal give me all the information about the position, Location
              and sent off my resume. ”
            </p>
          </div>
        </div>
        <div className="hover:shadow-2xl items-center hover:shadow-black transition-all  hover:h-[25rem]   h-[22rem] w-[16rem]  border-2 border-black p-2 space-y-2 justify-center   rounded-xl ">
          <div className="flex item-center ">
            <img src={usericon} className="w-[5rem]" alt="" />
            <span className="font-bold item-center flex text-xl ml-10 ">
              ABC_XYZ
            </span>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-lg text-center mt-10 hover:text-xl">
              “I Used MSME Growth Engine Portal and I got Job within a week. The
              Portal give me all the information about the position, Location
              and sent off my resume. ”
            </p>
          </div>
        </div>
        <div className="hover:shadow-2xl items-center hover:shadow-black transition-all  hover:h-[25rem]   h-[22rem] w-[16rem]  border-2 border-black p-2 space-y-2 justify-center   rounded-xl ">
          <div className="flex item-center ">
            <img src={usericon} className="w-[5rem]" alt="" />
            <span className="font-bold item-center flex text-xl ml-10 ">
              ABC_XYZ
            </span>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-lg text-center mt-10 hover:text-xl">
              “I Used MSME Growth Engine Portal and I got Job within a week. The
              Portal give me all the information about the position, Location
              and sent off my resume. ”
            </p>
          </div>
        </div>
        <div className="hover:shadow-2xl items-center hover:shadow-black transition-all  hover:h-[25rem]   h-[22rem] w-[16rem]  border-2 border-black p-2 space-y-2 justify-center   rounded-xl ">
          <div className="flex item-center ">
            <img src={usericon} className="w-[5rem]" alt="" />
            <span className="font-bold item-center flex text-xl ml-10 ">
              ABC_XYZ
            </span>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-lg text-center mt-10 hover:text-xl">
              “I Used MSME Growth Engine Portal and I got Job within a week. The
              Portal give me all the information about the position, Location
              and sent off my resume. ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
