import React, { useState } from "react";
import Photo from "../../images/CompanyIcon.png";

export default function CompanyLogin(props) {
  const [username, setUsername] = useState("");

  const filterCompanyData = props.CompanyData.map((data) => {
    return data.compName;
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (filterCompanyData.includes(username)) {
      alert("Logged In successfully");
      props.isUserLoggedIn("Yes");
      props.redirectHome();
    } else {
      alert("Please enter valid Username!");
      props.isUserLoggedIn("No");
    }
  };

  return (
    <div>
      <div>
        <div className="border pb-[3rem] ml-[22rem] mt-[5rem] border-gray-100 shadow-lg rounded-xl shadow-gray-800 w-[64rem] h-[36rem] mb-28 flex flex-row justify-center  items-center space-x-28 ">
          <div className="ml-[4rem]">
            <img src={Photo} alt="LOGO" className="w-80 h-80" />
          </div>
          <div className="pr-[4rem] ">
            <div className="font-bold text-2xl text-center m-4">Login</div>
            <form
              action=""
              onSubmit={submitHandler}
              className="space-y-5 flex flex-col items-center"
            >
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
                  onChange={(e) => {
                    e.preventDefault();
                    setUsername(e.target.value);
                  }}
                  placeholder="User Name"
                  required
                />
              </div>

              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="33"
                  viewBox="0 0 25 33"
                  fill="none"
                  className="bg-[#267DFF] p-1 w-10 h-10 rounded-l-xl "
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5957 10.5465V12.4859C4.33496 12.5097 4.09031 12.5394 3.85829 12.5811C2.82453 12.7597 1.95387 13.1467 1.26241 14.0412C0.570936 14.9372 0.274592 16.0654 0.135609 17.4049C0.00122069 18.6953 0.0012207 20.337 0.0012207 22.3716V22.5353C0.0012207 24.57 0.00122069 26.2116 0.135609 27.502C0.273444 28.8416 0.572085 29.9698 1.26241 30.8658C1.95387 31.7618 2.82453 32.1458 3.85829 32.3274C4.85414 32.5 6.12107 32.5 7.69123 32.5H17.0065C18.5767 32.5 19.8436 32.5 20.8395 32.3274C21.8732 32.1458 22.7439 31.7618 23.4354 30.8658C24.1268 29.9698 24.4232 28.8416 24.5633 27.502C24.6965 26.2116 24.6965 24.57 24.6965 22.5353V22.3716C24.6965 20.337 24.6965 18.6953 24.5633 17.4049C24.4232 16.0654 24.1268 14.9372 23.4354 14.0412C22.7439 13.1452 21.8732 12.7612 20.8395 12.5811C20.5945 12.5393 20.3486 12.5075 20.1021 12.4859V10.5465C20.1021 7.88201 19.2852 5.32664 17.8312 3.44256C16.3772 1.55847 14.4052 0.5 12.3489 0.5C10.2926 0.5 8.32056 1.55847 6.86656 3.44256C5.41255 5.32664 4.5957 7.88201 4.5957 10.5465ZM12.3489 2.73256C10.7496 2.73256 9.21574 3.55581 8.08485 5.02121C6.95396 6.48661 6.31863 8.47412 6.31863 10.5465V12.4114C6.74707 12.407 7.20536 12.407 7.69123 12.407H17.0065C17.4924 12.407 17.9507 12.407 18.3791 12.4114V10.5465C18.3791 6.23023 15.6799 2.73256 12.3489 2.73256ZM4.08801 14.7928C3.24492 14.9402 2.79926 15.2096 2.48109 15.6204C2.16292 16.0327 1.95617 16.6101 1.84246 17.7041C1.72645 18.8278 1.72415 20.3177 1.72415 22.4535C1.72415 24.5893 1.72645 26.0792 1.84246 27.2044C1.95617 28.2968 2.16407 28.8743 2.48109 29.2866C2.79926 29.6989 3.24492 29.9668 4.08916 30.1141C4.95522 30.2645 6.10614 30.2674 7.75441 30.2674H16.9434C18.5916 30.2674 19.7414 30.2645 20.6098 30.1141C21.4528 29.9668 21.8985 29.6974 22.2167 29.2866C22.5348 28.8743 22.7416 28.2968 22.8553 27.2029C22.9713 26.0792 22.9736 24.5893 22.9736 22.4535C22.9736 20.3177 22.9713 18.8263 22.8553 17.7026C22.7416 16.6101 22.5337 16.0327 22.2167 15.6204C21.8985 15.2081 21.4528 14.9402 20.6086 14.7928C19.7414 14.6425 18.5916 14.6395 16.9434 14.6395H7.75441C6.10614 14.6395 4.95522 14.6425 4.08801 14.7928Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M7.87414 23.3202C7.87414 23.7149 7.75313 24.0935 7.53772 24.3726C7.32231 24.6517 7.03016 24.8085 6.72552 24.8085C6.42089 24.8085 6.12874 24.6517 5.91333 24.3726C5.69792 24.0935 5.5769 23.7149 5.5769 23.3202C5.5769 22.9254 5.69792 22.5468 5.91333 22.2677C6.12874 21.9886 6.42089 21.8318 6.72552 21.8318C7.03016 21.8318 7.32231 21.9886 7.53772 22.2677C7.75313 22.5468 7.87414 22.9254 7.87414 23.3202ZM12.4686 23.3202C12.4686 23.7149 12.3476 24.0935 12.1322 24.3726C11.9168 24.6517 11.6246 24.8085 11.32 24.8085C11.0154 24.8085 10.7232 24.6517 10.5078 24.3726C10.2924 24.0935 10.1714 23.7149 10.1714 23.3202C10.1714 22.9254 10.2924 22.5468 10.5078 22.2677C10.7232 21.9886 11.0154 21.8318 11.32 21.8318C11.6246 21.8318 11.9168 21.9886 12.1322 22.2677C12.3476 22.5468 12.4686 22.9254 12.4686 23.3202ZM15.9145 24.8085C16.2191 24.8085 16.5113 24.6517 16.7267 24.3726C16.9421 24.0935 17.0631 23.7149 17.0631 23.3202C17.0631 22.9254 16.9421 22.5468 16.7267 22.2677C16.5113 21.9886 16.2191 21.8318 15.9145 21.8318C15.6099 21.8318 15.3177 21.9886 15.1023 22.2677C14.8869 22.5468 14.7659 22.9254 14.7659 23.3202C14.7659 23.7149 14.8869 24.0935 15.1023 24.3726C15.3177 24.6517 15.6099 24.8085 15.9145 24.8085Z"
                    fill="#FEFEFE"
                  />
                </svg>
                <input
                  type="number"
                  placeholder="Password"
                  required
                  className=" bg-white border border-black w-72 h-10 rounded-r-xl p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <p className="text-[#267DFF] mr-48">Forgot Password?</p>
              <button className="e bg-blue-500 text-white p-2 w-[8rem] mt-7 text-center shadow-lg  rounded">
                Login
              </button>
              <span>
                Already have an account?{" "}
                <button className="text-blue-400" type="submit">
                  Register
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
