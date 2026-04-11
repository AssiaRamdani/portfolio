import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Competences from "./components/Competences";
import Projets from "./components/projets";

function App() {
  return (
    <div className="min-h-screen bg-[#F8E7ED] flex-col items-center justify-center p-4 space-y-4 ">

      <div
        className="w-full max-w-7xl p-5 relative overflow-hidden custom-shape"
        style={{
          backgroundColor: "#E08D9F",
          // 
          borderRadius: "25px ",

        }}
      >

        {/* Navbar */}
        <Navbar />

        {/* Hero */}

        <Hero />

      </div>
      <AboutUs />
      <div className="w-100% h-1 bg-[#E08D9F] mt-2 rounded"></div>
      <Projets />
      <div className="w-100% h-1 bg-[#E08D9F] mt-2 rounded"></div>


      <Competences />
      <Footer />
    </div>
  );
}

export default App;