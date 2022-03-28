import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Search from "./components/Search.jsx";
import Download from "./components/Download.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
