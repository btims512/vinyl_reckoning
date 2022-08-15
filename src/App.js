import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import HomeBody from "./components/home/HomeBody";
import Carousel from "./components/Header/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselSlider from "./components/Header/Carousel";
import Playlist from "./components/Playlist/Playlist";
import { Controls } from "./components/Controls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CarouselSlider />
      {/* <Controls />
      <Playlist /> */}
      <HomeBody />
      <Footer />
    </div>
  );
}

export default App;
