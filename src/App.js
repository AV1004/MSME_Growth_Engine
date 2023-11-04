import { useState } from "react";
import Footer from "./components/Footer";
import LoginMain from "./components/Login/LoginMain";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import RegisterMain from "./components/Register/RegisterMain";
import AfterRegisterJobSeeker from "./components/Register/AfterRegisterJobSeeker";
import AfterRegisterCompany from "./components/Register/AfterRegisterCompany";

function App() {
  const [nevigationValue, setNevigationValue] = useState("Home");

  const CompanyData = [];
  const JobSeekrData = [];

  const getCompanyData = (data) => {
    CompanyData.push(data);
    console.log(CompanyData);
  };

  const getJobSeekrData = (data) => {
    JobSeekrData.push(data);
    console.log(JobSeekrData);
  };

  const showMainContent = () => {
    if (nevigationValue === "Home") {
      return "Home Page";
    } else if (nevigationValue === "AboutMsme") {
      return <AboutUs />;
    } else if (nevigationValue === "Learn") {
      return "Learn Page";
    } else if (nevigationValue === "Services") {
      return "Services Page";
    } else if (nevigationValue === "Register") {
      return (
        <RegisterMain
          PassCompData={getCompanyData}
          PassJobSeekerData={getJobSeekrData}
        />
      );
    } else if (nevigationValue === "Login") {
      return (
        <LoginMain CompanyData={CompanyData} JobSeekrData={JobSeekrData} />
      );
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

export default App;
