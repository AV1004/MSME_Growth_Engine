import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import JobSeekerRegister from "./components/JobSeekerRegister";
function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="mb-auto h-90">
        <JobSeekerRegister />{" "}
      </main>

      <Footer />
    </div>
  );
}

export default App;
