import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import HomeBody from "./components/home/HomeBody";
import Carousel from "./components/Header/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselSlider from "./components/Header/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CarouselSlider />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default App;
