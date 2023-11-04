import { useState } from "react";
import MsmesHome from "./components/MSMEs/MsmesHome";
import Footer from "./components/Footer";
import LoginMain from "./components/Login/LoginMain";
import Navbar from "./components/Navbar";
import CompnayHome from '../src/components/CompanyProfile/CompnayHome'
import AboutUs from "./components/AboutUs";
import RegisterMain from "./components/Register/RegisterMain";
import AfterRegisterJobSeeker from "./components/Register/AfterRegisterJobSeeker";
import AfterRegisterCompany from "./components/Register/AfterRegisterCompany";
import MainHome from "./components/MainHome";

function App() {
  const [nevigationValue, setNevigationValue] = useState("Home");

  const [companyData, setCompanyData] = useState([]);
  const [jobSeekerData, setJobSeekerData] = useState([]);

  const [isCompanyUserHasBeenLoggedIn, setIsCompanyUserHasBeenLoggedIn] =
    useState("No");
  const [isCompanyRegisteredCondtion, setIsCompanyRegisteredCondition] =
    useState("No");

  const getCompanyData = (data) => {
    setCompanyData((prevData) => {
      return [...prevData, data];
    });
    console.log(companyData);
  };

  const getJobSeekrData = (data) => {
    setJobSeekerData((prevData) => {
      return [...prevData, data];
    });
    console.log(jobSeekerData);
  };

  const isUserLoggedIn = (condition) => {
    setIsCompanyUserHasBeenLoggedIn(condition);
  };

  const isCompanyRegistered = (condition) => {
    setIsCompanyRegisteredCondition(condition);
  };

  const redirectHome = () => {
    setNevigationValue("Home");
  };

  const showMainContent = () => {
    if (nevigationValue === "Home") {
      return <MainHome />;
    } else if (nevigationValue === "AboutMsme") {
      return <AboutUs />;
    } else if (nevigationValue === "Learn") {
      return <CompnayHome/>;
    } else if (nevigationValue === "MsmesHome") {
      return <MsmesHome/>;
    } else if (nevigationValue === "Register") {
      return (
        <RegisterMain
          PassCompData={getCompanyData}
          PassJobSeekerData={getJobSeekrData}
          isCompanyRegistered={isCompanyRegistered}
        />
      );
    } else if (nevigationValue === "Login") {
      return (
        <LoginMain
          CompanyData={companyData}
          JobSeekrData={jobSeekerData}
          isUserLoggedIn={isUserLoggedIn}
        />
      );
    } else if (nevigationValue === "My Profile") {
      console.log(nevigationValue);
    }
  };

  const GetValueOfNevigation = (value) => {
    // console.log(value);
    setNevigationValue(value);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar GiveNevigationValue={GetValueOfNevigation} />

        <main className="mb-auto h-90">{showMainContent()}</main>

        <Footer />
      </div>
    );
  }
}

export default App;
