import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="mb-auto">Content :)</main>
      <Footer />
    </div>
  );
}

export default App;
