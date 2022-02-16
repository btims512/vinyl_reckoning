import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import HomeBody from "./components/home/HomeBody";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default App;
