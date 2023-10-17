import { useState } from "react";
import logo from "../assets/logo.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";

function India() {
  return (
    <>
      <Header />
      <OurDestinations />
    </>
  );
}

function Header() {
  const [enquire, setEnquire] = useState(false);

  return (
    <header
      style={{
        background:
          "url(https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg)",
        backgroundSize: "cover",
      }}
      className="px-12 relative py-5 flex flex-col font-primary min-h-screen bg-[#1B1A1A]"
    >
      <nav className="flex items-center justify-between w-full">
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
                : "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 -translate-y-12 duration-200 -z-10"
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
    </header>
  );
}

function OurDestinations() {
  return <Parallax className="min-h-screen"></Parallax>;
}
export default India;
