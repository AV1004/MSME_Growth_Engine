import React, { useState } from "react";
import LOGO from "../images/LOGO.png";

export default function Navbar(props) {
  const [homeButtonState, setHomeButtonState] = useState({
    class: "bg-white text-blue-500 px-6 py-1 text-center  rounded-2xl",
  });
  const [aboutButtonState, setAboutButtonState] = useState({
    class: "",
  });
  const [learnButtonState, setLearnButtonState] = useState({
    class: "",
  });
  const [MsmesHomeButtonState, setMsmesHomeButtonState] = useState({
    class: "",
  });
  const [registerButtonState, setRegisterButtonState] = useState({
    class: "",
  });
  const [loginButtonState, setLoginButtonState] = useState({
    class: "",
  });
  const [companyIsLoggedIn, setCompanyIsLoggedIn] = useState({
    class: "",
  });

  const logInRegisterOrProfile = () => {
    // console.log(props.isCompanyUserHasBeenLoggedIn);
    if (props.isCompanyUserHasBeenLoggedIn === "Yes") {
      return (
        <div className="space-x-9 pl-48">
          <button
            onClick={() => {
              setHomeButtonState({
                class:
                  "bg-white text-blue-500 px-6 py-1 text-center  rounded-2xl",
              });

              setAboutButtonState({ class: "" });
              setLearnButtonState({ class: "" });
              setMsmesHomeButtonState({ class: "" });
              props.GiveNevigationValue("My Profile");
            }}
            className={companyIsLoggedIn.class}
          >
            My Profile
          </button>
        </div>
      );
    } else {
      return (
        <div className="space-x-9 pl-48">
          <button
            onClick={() => {
              setRegisterButtonState({
                class:
                  "bg-white text-blue-500 px-6 py-1 text-center  rounded-2xl",
              });
              setHomeButtonState({ class: "" });
              setAboutButtonState({ class: "" });
              setLearnButtonState({ class: "" });
              setMsmesHomeButtonState({ class: "" });
              setLoginButtonState({ class: "" });
              setCompanyIsLoggedIn({ class: "" });
              props.GiveNevigationValue("Register");
            }}
            className={registerButtonState.class}
          >
            Register
          </button>
          <button
            onClick={() => {
              setHomeButtonState({ class: "" });
              setAboutButtonState({ class: "" });
              setLearnButtonState({ class: "" });
              setMsmesHomeButtonState({ class: "" });
              setRegisterButtonState({ class: "" });
              setCompanyIsLoggedIn({ class: "" });
              setLoginButtonState({
                class:
                  "bg-white text-blue-500 px-6 py-1 text-center  rounded-2xl",
              });
              props.GiveNevigationValue("Login");
            }}
            className={loginButtonState.class}
          >
            Login
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <nav className=" bg-blue-500 flex">
        <img src={LOGO} alt="logo" className="p-2 mx-5 " />
        <ul className="items-center flex space-x-12 ml-3 font-semibold text-xl text-white p-4  ">
          <li>
            <button
              onClick={() => {
                setHomeButtonState({
                  class:
                    "bg-white text-blue-500 px-6 py-1 text-center  rounded-2xl",
                });
                setAboutButtonState({ class: "" });
                setLearnButtonState({ class: "" });
                setMsmesHomeButtonState({ class: "" });
                setRegisterButtonState({ class: "" });
                setLoginButtonState({ class: "" });
                setCompanyIsLoggedIn({ class: "" });
                props.GiveNevigationValue("Home");
              }}
              className={homeButtonState.class}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setAboutButtonState({
                  class:
                    "bg-white text-blue-500 px-6 py-1 text-center  rounded-2xl",
                });
                setHomeButtonState({ class: "" });
                setLearnButtonState({ class: "" });
                setMsmesHomeButtonState({ class: "" });
                setRegisterButtonState({ class: "" });
                setLoginButtonState({ class: "" });
                setCompanyIsLoggedIn({ class: "" });
                props.GiveNevigationValue("AboutMsme");
              }}
              className={aboutButtonState.class}
            >
              About MSME
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setLearnButtonState({
                  class:
                    "bg-white text-blue-500 px-6 py-1 text-center  rounded-2xl",
                });
                setHomeButtonState({ class: "" });
                setAboutButtonState({ class: "" });
                setMsmesHomeButtonState({ class: "" });
                setRegisterButtonState({ class: "" });
                setLoginButtonState({ class: "" });
                setCompanyIsLoggedIn({ class: "" });
                props.GiveNevigationValue("Learn");
              }}
              className={learnButtonState.class}
            >
              Learn
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setMsmesHomeButtonState({
                  class:
                    "bg-white text-blue-500 px-6 py-1 text-center  rounded-2xl",
                });
                setHomeButtonState({ class: "" });
                setAboutButtonState({ class: "" });
                setLearnButtonState({ class: "" });
                setRegisterButtonState({ class: "" });
                setLoginButtonState({ class: "" });
                setCompanyIsLoggedIn({ class: "" });
                props.GiveNevigationValue("MsmesHome");
              }}
              className={MsmesHomeButtonState.class}
            >
              MSMEs
            </button>
          </li>
          <li>
            <input
              //   type="search"
              className="text-black font-normal text-xl rounded-tl-3xl rounded-bl-3xl w-96 h-8 p-4 outline-none"
            />
            <button>
              <svg
                width="40"
                height="32.5"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-white -mb-[0.5rem] pr-4 rounded-tr-3xl rounded-br-3xl"
              >
                <circle
                  cx="11"
                  cy="11.5"
                  r="7"
                  stroke="#33363F"
                  strokeWidth="2"
                />
                <path
                  d="M20 20.5L17 17.5"
                  stroke="#33363F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </li>

          {logInRegisterOrProfile()}
        </ul>
      </nav>
    </div>
  );
}
