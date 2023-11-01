import { useState } from "react";
import Footer from "./components/Footer";
import LoginMain from "./components/Login/LoginMain";
import Navbar from "./components/Navbar";
import RegisterMain from "./components/Register/RegisterMain";

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
        {nevigationValue === "Register" ? <RegisterMain /> : <LoginMain />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
