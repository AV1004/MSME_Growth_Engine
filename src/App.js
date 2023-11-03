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

  const GetValueOfNevigation = (value) => {
    // console.log(value);
    setNevigationValue(value);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar GiveNevigationValue={GetValueOfNevigation} />

      <main className="mb-auto h-90">
        {/* {nevigationValue === "Register" ? <RegisterMain /> : <LoginMain />} */}
<<<<<<< HEAD
    <AboutUs/>

=======
        {/* <AfterRegisterJobSeeker /> */}
        <AfterRegisterCompany />
>>>>>>> 5954710d7b4b568ca0a62d764506d5fc4c306429
      </main>

      <Footer />
    </div>
  );
}

export default App;
