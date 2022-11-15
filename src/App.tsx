import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
