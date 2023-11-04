import React, { useState } from "react";
import JobSeekerRegister from "./JobSeekerRegister";
import CompanyRegister from "./CompanyRegister";

export default function RegisterMain(props) {
  const isCompanyRegistered = (condtion) => {
    props.isCompanyRegistered(condtion);
  };

  const [stateOfRegisterButton, setStateOfRegisterButton] =
    useState("JobSeeker");
  const BtnActiveClass =
    "bg-blue-500 text-white px-6 py-1 text-center shadow-lg shadow-gray-800  rounded";
  const BtnInActiveClass =
    "border-2 border-blue-500 text-blue-500 px-6 py-1 text-center  rounded";

  const getCompanyData = (obj) => {
    console.log(obj);
    props.PassCompData(obj);
  };

  const getJobSeekerData = (obj) => {
    console.log(obj);
    props.PassJobSeekerData(obj);
  };

  return (
    <div>
      <div className="justify-center items-center flex flex-col mt-7">
        <span className="text-black font-semibold text-3xl">
          Register YourSelf Here
        </span>
        <div className="space-x-4 mt-14 flex absolute left-28 top-24">
          <button
            onClick={() => {
              setStateOfRegisterButton("JobSeeker");
            }}
            className={
              stateOfRegisterButton === "JobSeeker"
                ? BtnActiveClass
                : BtnInActiveClass
            }
          >
            Job Seekers
          </button>
          <button
            onClick={() => {
              setStateOfRegisterButton("Company");
            }}
            className={
              stateOfRegisterButton === "Company"
                ? BtnActiveClass
                : BtnInActiveClass
            }
          >
            Company
          </button>
        </div>
      </div>
      {stateOfRegisterButton === "JobSeeker" ? (
        <JobSeekerRegister passDataToMainRegister={getJobSeekerData} />
      ) : (
        <CompanyRegister
          isCompanyRegistered={isCompanyRegistered}
          passDataToMainRegister={getCompanyData}
        />
      )}
    </div>
  );
}
