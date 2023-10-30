import React from "react";
import Photo from "../images/RegisterIconSEEKERS.png";
export default function JobSeekerRegister() {
  return (
    <div>
      <div>
        <div className="justify-center items-center flex flex-col mt-7">
          <span className="text-black font-semibold text-3xl">
            Register YourSelf Here
          </span>
          <div className="space-x-4 mt-14 flex absolute left-28 top-24">
            <button className="bg-blue-500 text-white px-6 py-1 text-center shadow-lg shadow-gray-800  rounded">
              Job Seekers
            </button>
            <button className="border-2 border-blue-500 text-blue-500 px-6 py-1 text-center  rounded">
              Company
            </button>
          </div>
        </div>

        <div className="border pb-[3rem] ml-[22rem] mt-[5rem] border-gray-100 shadow-lg rounded-xl shadow-gray-800 w-[64rem] h-[36rem] mb-28 flex flex-row justify-center  items-center space-x-28 ">
          <div className="ml-[4rem]">
            <img src={Photo} alt="LOGO" className="w-80 h-80" />
          </div>
          <div className="pr-[4rem] ">
            <div className="font-bold text-2xl text-center m-4">Register</div>
            <form action="" className="space-y-5 flex flex-col items-center">
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  className="bg-[#267DFF] p-2 w-10 h-10 rounded-l-xl"
                >
                  <path
                    d="M33.8123 16.5C33.8123 7.684 26.4202 0.5 17.3487 0.5C8.27733 0.5 0.885193 7.684 0.885193 16.5C0.885193 21.14 2.94314 25.316 6.20292 28.244C6.20292 28.26 6.20292 28.26 6.18646 28.276C6.35109 28.436 6.54865 28.564 6.71329 28.708C6.81207 28.788 6.89439 28.868 6.99317 28.932C7.28951 29.172 7.61879 29.396 7.93159 29.62C8.04684 29.7 8.14562 29.764 8.26086 29.844C8.57367 30.052 8.90294 30.244 9.24868 30.42C9.36392 30.484 9.49563 30.564 9.61088 30.628C9.94015 30.804 10.2859 30.964 10.6481 31.108C10.7798 31.172 10.9115 31.236 11.0432 31.284C11.4054 31.428 11.7676 31.556 12.1298 31.668C12.2615 31.716 12.3932 31.764 12.5249 31.796C12.92 31.908 13.3152 32.004 13.7103 32.1C13.8255 32.132 13.9408 32.164 14.0725 32.18C14.5335 32.276 14.9945 32.34 15.4719 32.388C15.5378 32.388 15.6036 32.404 15.6695 32.42C16.2292 32.468 16.789 32.5 17.3487 32.5C17.9085 32.5 18.4683 32.468 19.0116 32.42C19.0774 32.42 19.1433 32.404 19.2091 32.388C19.6866 32.34 20.1475 32.276 20.6085 32.18C20.7238 32.164 20.839 32.116 20.9707 32.1C21.3658 32.004 21.7774 31.924 22.1561 31.796C22.2878 31.748 22.4195 31.7 22.5512 31.668C22.9134 31.54 23.2921 31.428 23.6378 31.284C23.7695 31.236 23.9012 31.172 24.0329 31.108C24.3787 30.964 24.7244 30.804 25.0701 30.628C25.2019 30.564 25.3171 30.484 25.4323 30.42C25.7616 30.228 26.0909 30.052 26.4202 29.844C26.5354 29.78 26.6342 29.7 26.7494 29.62C27.0787 29.396 27.3915 29.172 27.6879 28.932C27.7866 28.852 27.869 28.772 27.9677 28.708C28.1488 28.564 28.3299 28.42 28.4946 28.276C28.4946 28.26 28.4946 28.26 28.4781 28.244C31.7544 25.316 33.8123 21.14 33.8123 16.5ZM25.4817 24.452C21.0201 21.54 13.7103 21.54 9.21575 24.452C8.49135 24.916 7.89867 25.46 7.40476 26.052C4.9023 23.588 3.35473 20.212 3.35473 16.5C3.35473 8.996 9.62734 2.9 17.3487 2.9C25.0701 2.9 31.3428 8.996 31.3428 16.5C31.3428 20.212 29.7952 23.588 27.2927 26.052C26.8153 25.46 26.2061 24.916 25.4817 24.452Z"
                    fill="white"
                  />
                  <path
                    d="M17.3488 8.38752C13.9408 8.38752 11.1749 11.0755 11.1749 14.3875C11.1749 17.6355 13.7926 20.2755 17.2664 20.3715H17.4146H17.5299H17.5628C20.8884 20.2595 23.5061 17.6355 23.5226 14.3875C23.5226 11.0755 20.7567 8.38752 17.3488 8.38752Z"
                    fill="white"
                  />
                </svg>
                <input
                  className="bg-white border border-black w-72 h-10 rounded-r-xl p-3"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="25"
                  viewBox="0 0 34 25"
                  fill="none"
                  className="bg-[#267DFF] p-2 w-10 h-10 rounded-l-xl"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.0678 0.5C32.5825 0.5 33.8123 1.6936 33.8123 3.1672V21.8328C33.8123 23.3048 32.5841 24.5 31.0678 24.5H3.62967C2.11502 24.5 0.885193 23.3064 0.885193 21.8328V3.1672C0.885193 1.6952 2.11337 0.5 3.62967 0.5H31.0678ZM12.6863 14.6248L4.60266 22.388H29.8331L21.8367 14.7048L17.3487 17.724L12.6863 14.6248ZM31.5732 8.1672L23.6773 13.4728L31.5732 21.0504V8.1672ZM3.12588 8.2648V20.8024L10.8407 13.3928L3.12588 8.2648ZM31.0415 2.6136H3.6807C3.53047 2.60675 3.38322 2.65598 3.26911 2.7512C3.21841 2.79533 3.17927 2.85057 3.15493 2.91235C3.13059 2.97412 3.12176 3.04065 3.12917 3.1064V5.6984L17.3487 15.1496L31.5798 5.6056V3.2184C31.5815 3.004 31.5304 2.8488 31.4284 2.7512C31.3777 2.70327 31.3172 2.66625 31.2508 2.64254C31.1844 2.61884 31.1137 2.60897 31.0431 2.6136H31.0415Z"
                    fill="#FEFEFE"
                  />
                </svg>
                <input
                  className="bg-white border border-black w-72 h-10 rounded-r-xl p-3"
                  type="email"
                  placeholder="Enter E-Mail"
                  required
                />
              </div>
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="33"
                  viewBox="0 0 29 33"
                  fill="none"
                  className="bg-[#267DFF] p-1 w-10 h-10 rounded-l-xl "
                >
                  <mask
                    id="path-1-outside-1_18_296"
                    maskUnits="userSpaceOnUse"
                    x="9.01544"
                    y="2.83333"
                    width="10"
                    height="7"
                    fill="black"
                  >
                    <rect
                      fill="white"
                      x="9.01544"
                      y="2.83333"
                      width="10"
                      height="7"
                    />
                    <path d="M15.7932 7.16666H12.9043C12.54 7.16666 12.3578 7.16666 12.2287 7.07624C12.1809 7.04278 12.1393 7.00123 12.1059 6.95345C12.0154 6.82431 12.0154 6.64213 12.0154 6.27777C12.0154 6.09559 12.0154 6.0045 12.0607 5.93993C12.0774 5.91605 12.0982 5.89527 12.122 5.87854C12.1866 5.83333 12.2777 5.83333 12.4599 5.83333H16.2377C16.4198 5.83333 16.5109 5.83333 16.5755 5.87854C16.5994 5.89527 16.6202 5.91605 16.6369 5.93993C16.6821 6.0045 16.6821 6.09559 16.6821 6.27777C16.6821 6.64213 16.6821 6.82431 16.5917 6.95345C16.5582 7.00123 16.5167 7.04278 16.4689 7.07624C16.3398 7.16666 16.1576 7.16666 15.7932 7.16666Z" />
                  </mask>
                  <path
                    d="M12.1059 6.95345L13.7442 5.8063L13.7442 5.8063L12.1059 6.95345ZM12.2287 7.07624L11.0815 8.71454L11.0815 8.71454L12.2287 7.07624ZM16.5917 6.95345L14.9534 5.8063L14.9534 5.8063L16.5917 6.95345ZM16.4689 7.07624L15.3217 5.43793L15.3217 5.43793L16.4689 7.07624ZM16.6369 5.93993L18.2752 4.79278L18.2752 4.79277L16.6369 5.93993ZM16.5755 5.87854L17.7227 4.24023L17.7227 4.24023L16.5755 5.87854ZM12.0607 5.93993L10.4223 4.79278L10.4223 4.79278L12.0607 5.93993ZM12.122 5.87854L10.9749 4.24023L10.9749 4.24023L12.122 5.87854ZM12.9043 9.16666H15.7932V5.16666H12.9043V9.16666ZM16.2377 3.83333H12.4599V7.83333H16.2377V3.83333ZM10.0154 6.27777C10.0154 6.4167 10.0128 6.67706 10.0378 6.91347C10.0664 7.18548 10.1481 7.64441 10.4676 8.1006L13.7442 5.8063C13.9732 6.13335 14.0097 6.43661 14.0157 6.49417C14.0187 6.52206 14.0174 6.52521 14.0165 6.47873C14.0155 6.4326 14.0154 6.37473 14.0154 6.27777H10.0154ZM12.9043 5.16666C12.8074 5.16666 12.7495 5.16658 12.7034 5.16565C12.6569 5.16472 12.66 5.16344 12.6879 5.16638C12.7455 5.17244 13.0488 5.20893 13.3758 5.43793L11.0815 8.71454C11.5377 9.03397 11.9966 9.11567 12.2686 9.14434C12.505 9.16926 12.7654 9.16666 12.9043 9.16666V5.16666ZM10.4676 8.1006C10.6348 8.33949 10.8426 8.54727 11.0815 8.71454L13.3758 5.43793C13.5191 5.53829 13.6438 5.66296 13.7442 5.8063L10.4676 8.1006ZM14.6821 6.27777C14.6821 6.37473 14.682 6.4326 14.6811 6.47873C14.6802 6.52521 14.6789 6.52206 14.6818 6.49417C14.6879 6.43661 14.7244 6.13335 14.9534 5.8063L18.23 8.1006C18.5494 7.64441 18.6311 7.18548 18.6598 6.91347C18.6847 6.67706 18.6821 6.4167 18.6821 6.27777H14.6821ZM15.7932 9.16666C15.9322 9.16666 16.1925 9.16926 16.4289 9.14434C16.7009 9.11567 17.1599 9.03397 17.616 8.71454L15.3217 5.43793C15.6488 5.20893 15.9521 5.17244 16.0096 5.16638C16.0375 5.16344 16.0407 5.16472 15.9942 5.16565C15.948 5.16658 15.8902 5.16666 15.7932 5.16666V9.16666ZM14.9534 5.8063C15.0537 5.66296 15.1784 5.53829 15.3217 5.43793L17.616 8.71454C17.8549 8.54727 18.0627 8.33949 18.23 8.1006L14.9534 5.8063ZM18.6821 6.27777C18.6821 6.22993 18.6847 6.03789 18.6654 5.8551C18.6424 5.6367 18.572 5.21669 18.2752 4.79278L14.9986 7.08709C14.747 6.72775 14.6992 6.38557 14.6875 6.2744C14.6817 6.2197 14.6816 6.18607 14.6818 6.19738C14.682 6.20834 14.6821 6.22636 14.6821 6.27777H18.6821ZM16.2377 7.83333C16.2891 7.83333 16.3071 7.83341 16.3181 7.83363C16.3294 7.83386 16.2957 7.83373 16.241 7.82796C16.1299 7.81624 15.7877 7.76846 15.4284 7.51685L17.7227 4.24023C17.2987 3.94341 16.8787 3.87302 16.6603 3.85C16.4775 3.83073 16.2855 3.83333 16.2377 3.83333V7.83333ZM18.2752 4.79277C18.1247 4.57779 17.9377 4.39079 17.7227 4.24023L15.4284 7.51685C15.2611 7.39975 15.1157 7.2543 14.9986 7.08709L18.2752 4.79277ZM14.0154 6.27777C14.0154 6.22636 14.0155 6.20834 14.0157 6.19738C14.016 6.18607 14.0158 6.2197 14.0101 6.2744C13.9984 6.38557 13.9506 6.72775 13.699 7.08709L10.4223 4.79278C10.1255 5.21669 10.0551 5.6367 10.0321 5.8551C10.0128 6.03789 10.0154 6.22993 10.0154 6.27777H14.0154ZM12.4599 3.83333C12.412 3.83333 12.22 3.83073 12.0372 3.85C11.8188 3.87302 11.3988 3.94341 10.9749 4.24023L13.2692 7.51685C12.9099 7.76846 12.5677 7.81624 12.4565 7.82796C12.4018 7.83373 12.3682 7.83386 12.3795 7.83363C12.3905 7.83341 12.4085 7.83333 12.4599 7.83333V3.83333ZM13.699 7.08709C13.5819 7.25431 13.4364 7.39975 13.2692 7.51685L10.9749 4.24023C10.7599 4.39078 10.5729 4.57778 10.4223 4.79278L13.699 7.08709Z"
                    fill="#FBF8F8"
                    mask="url(#path-1-outside-1_18_296)"
                  />
                  <rect
                    x="7.34875"
                    y="4.5"
                    width="14"
                    height="24"
                    rx="2"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="14.3487"
                    cy="24.5"
                    rx="1.16667"
                    ry="1.33333"
                    fill="#FBF8F8"
                  />
                </svg>
                <input
                  type="number"
                  placeholder="Enter mobile number"
                  required
                  className=" bg-white border border-black w-72 h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="23"
                  viewBox="0 0 25 23"
                  fill="none"
                  className="bg-[#267DFF] p-1 w-10 h-10 rounded-l-xl"
                >
                  <path
                    d="M12 6V19"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 6L21 19"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 6L3 19"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 19C21 19 20 17 16.5 17C13 17 12 19 12 19"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 19C12 19 11 17 7.5 17C4 17 3 19 3 19"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 6C21 6 20 4 16.5 4C13 4 12 6 12 6"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 6C12 6 11 4 7.5 4C4 4 3 6 3 6"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <select className=" border border-black w-72 h-10 rounded-r-xl ">
                  <option value="none">Institute</option>
                  <option value="CITD">
                    Central Institute of tool design(CITD),Hydrabad
                  </option>
                  <option value="CTR">Central Tool Room(CTR),Ludhiana</option>
                  <option value="CTTC">
                    Central Tool Room & Training Center(CTTC),Bhuvneshwar
                  </option>
                  <option value="CTTC">
                    Central Tool Room & Training Center(CTTC),Kolkata
                  </option>
                  <option value="CDGI">
                    Central for the devlopmet of glass industry(CDGI-Firozabad)
                  </option>
                  <option value="ESTC">
                    Electronic services and Training Center(ESTC),Ramnagar
                  </option>
                  <option value="MSME1">MSME Technology center,Bhiwadi</option>
                  <option value="MSME2">MSME Technology center,Bhopal</option>
                  <option value="MSME3">MSME Technology center,Durg</option>
                  <option value="MSME4">
                    MSME Technology center,Greater Noida
                  </option>
                  <option value="MSME5">
                    MSME Technology center,Puducherray
                  </option>
                </select>
              </div>
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="26"
                  viewBox="0 0 29 26"
                  fill="none"
                  className="bg-[#267DFF] p-1 w-10 h-10 rounded-l-xl"
                >
                  <path
                    d="M4 10L15 6L26 10L15 14L4 10Z"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10V18"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 12V19.1429C7 19.1429 7.72727 22 15 22C22.2727 22 23 19.1429 23 19.1429V12"
                    stroke="#FBF8F8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <select className=" border border-black w-72 h-10 rounded-r-xl ">
                  <option value="none">Qualification</option>
                  <option value="CITD">Below HSC/10th</option>
                  <option value="CTR">HSC/10th</option>
                  <option value="CTTC">ITI</option>
                  <option value="CTTC">ITI(puruing)</option>
                  <option value="CDGI">Diploma(passout)</option>
                  <option value="ESTC">Diploma(puruing)</option>
                  <option value="MSME1">Intermediate(12th)/10th+2</option>
                  <option value="MSME2">Graduate(tech)</option>
                  <option value="MSME3">Graduate(tech)puruing</option>
                  <option value="MSME4">Graduate(NONtech)</option>
                  <option value="MSME5">Graduate(NONtech)puruing</option>
                </select>
              </div>
              <button className="e bg-blue-500 text-white p-2 w-[8rem] mt-7 text-center shadow-lg  rounded">
                Register
              </button>
              <span>
                Already have an account?{" "}
                <button className="text-blue-400">Login</button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
