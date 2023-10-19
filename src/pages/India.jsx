import { useState } from "react";
import logo from "../assets/logo.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

function India() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for an instant scroll
    });
  }
  scrollToTop();
  return (
    <>
      <Header />
      <OurDestinations />
    </>
  );
}

function Header() {
  const [enquire, setEnquire] = useState(false);
  const imageSource =
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg";

  return (
    <Parallax
      strength={500}
      bgImage={imageSource}
      className="relative flex flex-col font-primary min-h-screen bg-[#1B1A1A]"
    >
      <nav className="pr-6 flex items-center justify-between w-full">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex gap-24 font-bold text-xl text-white">
          <a href="/">HOME</a>
          <a href="/destinations">DESTINATIONS</a>
          <a href="#services">OUR SERVICES</a>
          <a href="#gallery">GALLERY</a>
          <a href="#about">ABOUT US</a>
        </div>

        <div
          onClick={() => setEnquire(!enquire)}
          className="text-white flex gap-2 relative"
        >
          <button>ENQUIRE NOW</button>
          <img src={line} alt="" />

          <div
            className={
              enquire
                ? "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 translate-y-0 duration-200"
                : "absolute flex top-16 h-f w-full bg-white text-black p-4 flex-col gap-3 -translate-y-12 duration-200 -z-10"
            }
          >
            <a href="">Book Online</a>
            <a href="">By Email</a>
            <a href="">By Phone</a>
          </div>
        </div>
      </nav>

      <div className="h-[80vh] items-center justify-center font-urbanist w-full flex">
        <h1 className="india-font">INDIA</h1>
      </div>
    </Parallax>
  );
}

function OurDestinations() {
  return (
    <div
      name="kenya"
      className="my-12 flex flex-col items-center justify-center text-black gap-12"
    >
      <p className="text-6xl">Our Destinations</p>
      <p className="india-font-1 font-urbanist text-2xl">INDIA</p>

      <div className="grid grid-cols-2 place-items-center w-full mt-10 gap-12">
        {/* 1 */}
        <Link
          to="/about"
          className="flex flex-col w-[500px] h-[500px] bg-white rounded-l-3xl drop-shadow-xl"
        >
          <img
            src="https://placeholder.co/500x500"
            alt="placeholder"
            className="h-[70%] w-full rounded-tl-3xl object-cover"
          />
          <div className="p-4 flex flex-col justify-evenly h-full">
            <p className="text-black font-bold text-lg">
              Andaman and Nicobar Tour <br />
              Packages
            </p>
            <p className="text-black">India, South Asia</p>
          </div>
        </Link>

        {/* 2 */}
        <div className="flex flex-col w-[500px] h-[500px] bg-white rounded-r-3xl drop-shadow-xl">
          <img
            src="https://placeholder.co/500x500"
            alt="placeholder"
            className="h-[70%] w-full rounded-tr-3xl object-cover"
          />
          <div className="p-4 flex flex-col justify-evenly h-full">
            <p className="text-black font-bold text-lg">
              Andaman and Nicobar Tour <br />
              Packages
            </p>
            <p className="text-black">India, South Asia</p>
          </div>
        </div>

        {/* 1 */}
        <div className="flex flex-col w-[500px] h-[500px] bg-white rounded-l-3xl drop-shadow-xl">
          <img
            src="https://placeholder.co/500x500"
            alt="placeholder"
            className="h-[70%] w-full rounded-tl-3xl object-cover "
          />
          <div className="p-4 flex flex-col justify-evenly h-full">
            <p className="text-black font-bold text-lg">
              Andaman and Nicobar Tour <br />
              Packages
            </p>
            <p className="text-black">India, South Asia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default India;
