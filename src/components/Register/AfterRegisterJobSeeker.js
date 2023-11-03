import React, { useRef } from "react";

export default function AfterRegisterJobSeeker() {
  const WorkingHistoryRef = useRef();
  const skillsRef = useRef();
  const trainingRef = useRef();
  const mainFormRef = useRef();

  const resetHandler = (e, whichForm) => {
    e.preventDefault();
    if (whichForm === "WorkingHistory") {
      WorkingHistoryRef.current.reset();
    } else if (whichForm === "Skills") {
      skillsRef.current.reset();
    } else if (whichForm === "Training") {
      trainingRef.current.reset();
    } else if (whichForm === "Main") {
      mainFormRef.current.reset();
      WorkingHistoryRef.current.reset();
      skillsRef.current.reset();
      trainingRef.current.reset();
    }
  };
  return (
    <div className="flex  items-center flex-col">
      <h1 className="font-bold text-4xl mt-10">Enter Your Details</h1>
      <form
        ref={mainFormRef}
        className="flex flex-col items-center shadow-2xl p-10 mb-10 rounded-lg mt-4"
      >
        <div className="mt-16">
          <svg
            width="150"
            height="150"
            viewBox="0 0 230 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M230 115C230 51.635 178.365 0 115 0C51.635 0 0 51.635 0 115C0 148.35 14.375 178.365 37.145 199.41C37.145 199.525 37.145 199.525 37.03 199.64C38.18 200.79 39.56 201.71 40.71 202.745C41.4 203.32 41.975 203.895 42.665 204.355C44.735 206.08 47.035 207.69 49.22 209.3C50.025 209.875 50.715 210.335 51.52 210.91C53.705 212.405 56.005 213.785 58.42 215.05C59.225 215.51 60.145 216.085 60.95 216.545C63.25 217.81 65.665 218.96 68.195 219.995C69.115 220.455 70.035 220.915 70.955 221.26C73.485 222.295 76.015 223.215 78.545 224.02C79.465 224.365 80.385 224.71 81.305 224.94C84.065 225.745 86.825 226.435 89.585 227.125C90.39 227.355 91.195 227.585 92.115 227.7C95.335 228.39 98.555 228.85 101.89 229.195C102.35 229.195 102.81 229.31 103.27 229.425C107.18 229.77 111.09 230 115 230C118.91 230 122.82 229.77 126.615 229.425C127.075 229.425 127.535 229.31 127.995 229.195C131.33 228.85 134.55 228.39 137.77 227.7C138.575 227.585 139.38 227.24 140.3 227.125C143.06 226.435 145.935 225.86 148.58 224.94C149.5 224.595 150.42 224.25 151.34 224.02C153.87 223.1 156.515 222.295 158.93 221.26C159.85 220.915 160.77 220.455 161.69 219.995C164.105 218.96 166.52 217.81 168.935 216.545C169.855 216.085 170.66 215.51 171.465 215.05C173.765 213.67 176.065 212.405 178.365 210.91C179.17 210.45 179.86 209.875 180.665 209.3C182.965 207.69 185.15 206.08 187.22 204.355C187.91 203.78 188.485 203.205 189.175 202.745C190.44 201.71 191.705 200.675 192.855 199.64C192.855 199.525 192.855 199.525 192.74 199.41C215.625 178.365 230 148.35 230 115ZM171.81 172.155C140.645 151.225 89.585 151.225 58.19 172.155C53.13 175.49 48.99 179.4 45.54 183.655C28.06 165.945 17.25 141.68 17.25 115C17.25 61.065 61.065 17.25 115 17.25C168.935 17.25 212.75 61.065 212.75 115C212.75 141.68 201.94 165.945 184.46 183.655C181.125 179.4 176.87 175.49 171.81 172.155Z"
              fill="#292D32"
            />
            <path
              d="M115 56.6914C91.195 56.6914 71.875 76.0114 71.875 99.8165C71.875 123.162 90.16 142.137 114.425 142.827H115.46H116.265H116.495C139.725 142.022 158.01 123.162 158.125 99.8165C158.125 76.0114 138.805 56.6914 115 56.6914Z"
              fill="#292D32"
            />
          </svg>
          <button className="border rounded-md p-2 text-[#267DFF] border-[#267DFF] ml-2 mt-5">
            Add Your Photo
          </button>
        </div>
        <div id="personalDetails" className="flex flex-col items-center">
          <h1 className="font-bold text-2xl mt-10 mb-5">Personal Details</h1>
          <div className="flex">
            <label
              htmlFor="name"
              className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              className=" bg-white border border-black w-[75rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto" }}
          >
            <div className="flex">
              <label
                htmlFor="name"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                E-Mail
              </label>
              <input
                type="email"
                placeholder="Enter Your E-Mail"
                required
                className=" bg-white border border-black w-[39rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex ">
              <label
                htmlFor="phoneNo"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Phone No.
              </label>
              <input
                type="number"
                placeholder="Enter Your Phone No."
                required
                className=" bg-white border border-black w-[25rem] h-10 outline-none rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="dob"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="Enter Your E-Mail"
                required
                className=" bg-white border text-gray-400 border-black w-[17.8rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex ">
              <label
                htmlFor="gender"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Gender
              </label>
              <select
                className=" bg-white border text-gray-400 text-sm border-black w-[17.7rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="gender"
                id="gender"
              >
                <option value="male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex ">
              <label
                htmlFor="category"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Category
              </label>
              <select
                className=" bg-white border text-gray-400 text-sm border-black w-[17.8rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="category"
                id="category"
              >
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
              </select>
            </div>
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="martialStatus"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Martial Status
              </label>
              <select
                className=" bg-white border text-gray-400 text-sm border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="maritalStatus"
                id="maritalStatus"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorce">Divorce</option>
              </select>
            </div>
            <div className="flex ">
              <label
                htmlFor="religion"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Religion
              </label>
              <select
                className=" bg-white border text-gray-400 text-sm border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="religion"
                id="religion"
              >
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="physicallyDisabled"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Physically Disabled
              </label>
              <select
                className=" bg-white border text-gray-400 text-sm border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="physicallyDisabled"
                id="physicallyDisabled"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex">
              <label
                htmlFor="alterEmail"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Alternate E-Mail
              </label>
              <input
                type="email"
                placeholder="Enter Your Alternate E-Mail"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="documentType"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Document Type
              </label>
              <select
                className=" bg-white text-gray-400 text-sm border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="documentType"
                id="documentType"
              >
                <option value="PAN">PAN</option>
                <option value="GSTN">GSTN</option>
                <option value="UAN">UAN</option>
                <option
                  value="VoterID
"
                >
                  VOTER ID
                </option>
                <option
                  value="AADHAR
"
                >
                  AADHAR
                </option>
              </select>
            </div>
            <div className="flex">
              <label
                htmlFor="documentNumber"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Document Number
              </label>
              <input
                type="number"
                placeholder="Enter Your Document Number"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
        </div>

        <div id="addressDetails" className="flex flex-col items-center">
          <h1 className="font-bold text-2xl mt-10 mb-5">Address</h1>
          <div className="flex">
            <label
              htmlFor="address"
              className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
            >
              Address
            </label>
            <input
              type="text"
              placeholder="Enter Your Address"
              required
              className=" bg-white border border-black w-[75rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="Countary"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Countary
              </label>
              <input
                type="text"
                placeholder="Enter Your Countary"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex">
              <label
                htmlFor="state"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                State
              </label>
              <input
                type="text"
                placeholder="Enter Your State"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="district"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                District
              </label>
              <input
                type="text"
                placeholder="Enter Your District"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex">
              <label
                htmlFor="pincode"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Pincode
              </label>
              <input
                type="number"
                placeholder="Enter Your Pincode"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
        </div>

        <form
          ref={WorkingHistoryRef}
          id="addressDetails"
          className="flex flex-col items-center"
        >
          <h1 className="font-bold text-2xl mt-10 mb-5">Working History</h1>
          <div className="flex">
            <label
              htmlFor="designation"
              className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
            >
              Designation
            </label>
            <input
              type="text"
              placeholder="Enter Your Designation"
              required
              className=" bg-white border border-black w-[75rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="flex mt-4">
            <label
              htmlFor="company"
              className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
            >
              Company
            </label>
            <input
              type="text"
              placeholder="Enter Your Company"
              required
              className=" bg-white border border-black w-[75rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="startDate"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Start Date
              </label>
              <input
                type="date"
                placeholder="Enter Start Date"
                required
                className=" bg-white border text-gray-400 border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex">
              <label
                htmlFor="endDate"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                End Date
              </label>
              <input
                type="date"
                placeholder="Enter End Date"
                required
                className=" bg-white border text-gray-400 border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="salaryPerMonth"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-sm font-bold h-10 rounded-l-xl "
              >
                Salary(Per Month)
              </label>
              <input
                type="text"
                placeholder="Enter Your Salary(Per Month)"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex">
              <label
                htmlFor="currentEmployer"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Current Employer
              </label>
              <select
                className=" bg-white border text-gray-400 text-sm border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="physicallyDisabled"
                id="physicallyDisabled"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="skillSet"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Skill Set
              </label>
              <input
                type="text"
                placeholder="Enter Your Skill Set"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex">
              <label
                htmlFor="industryType"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Industry Type
              </label>
              <select
                className=" bg-white border text-gray-400 text-sm border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="physicallyDisabled"
                id="physicallyDisabled"
              >
                <option value="Engineering">Engineering</option>
                <option value="Commerce">Commerce</option>
                <option value="Marketing">Marketing</option>
                <option value="Law">Law</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="ml-[66rem]">
            <button
              className="border rounded-md p-2 text-[#267DFF] w-28 border-[#267DFF] text-xl ml-2 mt-5"
              onClick={(e) => {
                resetHandler(e, "WorkingHistory");
              }}
            >
              Reset
            </button>
            <button className="border rounded-md p-2 text-white w-28 bg-[#267DFF] text-xl ml-2 mt-5">
              Add
            </button>
          </div>
        </form>

        <form
          ref={skillsRef}
          id="skills"
          className="flex flex-col items-center"
        >
          <h1 className="font-bold text-2xl mt-10 mb-5">Skills</h1>
          <div className="flex">
            <label
              htmlFor="skills"
              className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
            >
              Skills
            </label>
            <input
              type="text"
              placeholder="Enter Your Skills"
              required
              className=" bg-white border border-black w-[75rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="experince"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-[0.8rem] font-bold h-10 rounded-l-xl "
              >
                Experince(In Month)
              </label>
              <input
                type="text"
                placeholder="Enter Your Experince"
                required
                className=" bg-white border border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex">
              <label
                htmlFor="level"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Level
              </label>
              <select
                className=" bg-white border text-gray-400 text-sm border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="physicallyDisabled"
                id="physicallyDisabled"
              >
                <option value="Beginner">Beginner</option>
                <option value="Interimeediate">Interimeediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>
          <div className="ml-[66rem]">
            <button
              className="border rounded-md p-2 text-[#267DFF] w-28 border-[#267DFF] text-xl ml-2 mt-5"
              onClick={(e) => {
                resetHandler(e, "Skills");
              }}
            >
              Reset
            </button>
            <button className="border rounded-md p-2 text-white w-28 bg-[#267DFF] text-xl ml-2 mt-5">
              Add
            </button>
          </div>
        </form>

        <form
          ref={trainingRef}
          id="traning"
          className="flex flex-col items-center"
        >
          <h1 className="font-bold text-2xl mt-10 mb-5">Training</h1>
          <div className="flex">
            <label
              htmlFor="trainingCenter"
              className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
            >
              Training Center
            </label>
            <select
              className=" bg-white border text-gray-400 text-sm border-black w-[75rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              name="physicallyDisabled"
              id="physicallyDisabled"
            >
              <option
                value="Central_footwea_training_institute_Agra
"
              >
                Central footwear training institute, Agra
              </option>
              <option value="Central_institute_of_hands_tool_Jalandhar">
                Central institute of hands tool,Jalandhar
              </option>
              <option value="Central_tool_room_ludhiyana">
                Central tool room, ludhiyana
              </option>
              <option value="MSME_TECHNOLOGY_CENTRE_BENGALURU">
                MSME TECHNOLOGY CENTRE BENGALURU
              </option>
              <option value="MSME_TECHNOLOGY_CENTRE_BHIWADI">
                MSME TECHNOLOGY CENTRE BHIWADI
              </option>
            </select>
          </div>
          <div className="flex mt-4">
            <label
              htmlFor="course"
              className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
            >
              Course
            </label>
            <select
              className=" bg-white border text-gray-400 text-sm border-black w-[75rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              name="Course"
              id="Course"
            >
              <option value="3D ANIMATION (MAYA)">3D ANIMATION (MAYA)</option>
              <option value="3D MAX">3D MAX</option>
              <option value="3D PRINTING">3D PRINTING</option>
              <option value="4 WHEELER REPAIR AND MAINTENANCE">
                4 WHEELER REPAIR AND MAINTENANCE
              </option>
              <option value="5'S KAIZEN">5'S KAIZEN</option>
              <option value="ABAQUS">ABAQUS</option>
              <option value="ADVANCE CAD CAE">ADVANCE CAD CAE</option>
              <option value="ADVANCE CERTIFICATE COURSE IN GLASS TECHNOLOGY">
                ADVANCE CERTIFICATE COURSE IN GLASS TECHNOLOGY
              </option>
              <option value="ADVANCE CERTIFICATE COURSE IN POLYMER TECHNOLOGY">
                ADVANCE CERTIFICATE COURSE IN POLYMER TECHNOLOGY
              </option>
              <option value="ADVANCED CAD">ADVANCED CAD</option>
              <option value="AUTOCAD">AUTOCAD</option>
              <option value="AUTOMATION">AUTOMATION</option>
              <option value="AWS">AWS</option>
              <option value="BAMBOO WORK ARTISAN">BAMBOO WORK ARTISAN</option>
              <option value="BASIC AUTOMATION">BASIC AUTOMATION</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto auto" }}
          >
            <div className="flex ">
              <label
                htmlFor="startDate"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Start Date
              </label>
              <input
                type="date"
                placeholder="Enter Start Date"
                required
                className=" bg-white border text-gray-400 border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex">
              <label
                htmlFor="endDate"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                End Date
              </label>
              <input
                type="date"
                placeholder="Enter End Date"
                required
                className=" bg-white border text-gray-400 border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div className="ml-[66rem]">
            <button
              className="border rounded-md p-2 text-[#267DFF] w-28 border-[#267DFF] text-xl ml-2 mt-5"
              onClick={(e) => {
                resetHandler(e, "Training");
              }}
            >
              Reset
            </button>
            <button className="border rounded-md p-2 text-white w-28 bg-[#267DFF] text-xl ml-2 mt-5">
              Add
            </button>
          </div>
        </form>

        <div id="otherDetails" className="flex flex-col items-center">
          <h1 className="font-bold text-2xl mt-10 mb-5">Other Details</h1>
          <div className="flex">
            <label
              htmlFor="areaOfIntereset"
              className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
            >
              Area of Intereset
            </label>
            <input
              type="text"
              placeholder="Enter Your Area of Interset"
              required
              className=" bg-white border  border-black w-[75rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div
            className="grid space-x-7 mt-4"
            style={{ gridTemplateColumns: "auto auto" }}
          >
            <div className="flex mt-4">
              <label
                htmlFor="resume"
                className="bg-[#267DFF] text-white p-2 w-36 text-center text-lg font-bold h-10 rounded-l-xl "
              >
                Resume
              </label>
              <input
                type="file"
                placeholder="Submit Your Resume"
                required
                className=" bg-white border mr-[43rem] border-black w-[32rem] outline-none h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div className="mb-10">
            <button
              className="border rounded-md p-2 text-[#267DFF] w-28 border-[#267DFF] text-xl ml-2 mt-5"
              onClick={(e) => {
                resetHandler(e, "Main");
              }}
            >
              Reset
            </button>
            <button className="border rounded-md p-2 text-white w-28 bg-[#267DFF] text-xl ml-2 mt-5">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
