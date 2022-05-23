import "./App.css";
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Card from "./components/card";

function App() {
  const data = [
    { image: "images/static/yuta.jpg" },
    { image: "images/static/yuta.jpg" },
    { image: "images/static/yuta.jpg" },
    { image: "images/static/yuta.jpg" },
    { image: "images/static/yuta.jpg" },
  ];
  return (
    <div className="App">
      <div className="header flex flex-col">
        <img
          className="header-img"
          src="/images/static/banner.jpg"
          alt="banner"
        ></img>
        <Navbar />
        <div className="flex flex-1 items-center">
          <Slider data={data} />
        </div>
      </div>
      <div className="text-white bg-primary flex py-4 px-2">
        <div className="md:container mx-auto">
          <div className="flex-1">
            <div className="flex justify-between items-center my-2">
              <p className="title">СОҢҒЫ ШЫҚҚАНДАР</p>
              <a href="">
                <p className="title">
                  ТАҒЫДА КӨРУ
                  <i className="fa-solid fa-angles-right"></i>
                </p>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              <Card item={{ image: "/images/static/banner.jpg" }} />
              <Card item={{ image: "/images/static/banner.jpg" }} />
              <Card item={{ image: "/images/static/banner.jpg" }} />
              <Card item={{ image: "/images/static/banner.jpg" }} />
              <Card item={{ image: "/images/static/banner.jpg" }} />
              <Card item={{ image: "/images/static/banner.jpg" }} />
              <Card item={{ image: "/images/static/banner.jpg" }} />
              <Card item={{ image: "/images/static/banner.jpg" }} />
              <Card item={{ image: "/images/static/banner.jpg" }} />
            </div>
            <div className="d-flex justify-content-center"></div>
          </div>
          <div className="right-side text-light"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
