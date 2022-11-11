import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
