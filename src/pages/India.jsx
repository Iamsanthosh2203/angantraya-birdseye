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
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex gap-24 font-bold text-xl text-white">
          <Link to="/">HOME</Link>
          <Link to="/destinations">DESTINATIONS</Link>
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
        <h1 className="india-font pl-24">INDIA</h1>
      </div>
    </Parallax>
  );
}

function OurDestinations() {
  const destinations = [
    {
      name: "Andaman and Nicobar Tour Packages",
      imageUrl:
        "https://www.tripexperienceblog.com/wp-content/uploads/2018/04/Andaman-Nicobar-Islands-1.jpg",
      location: "India, South Asia",
    },
    {
      name: "Banglore Tour Packages",
      imageUrl:
        "https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg",
      location: "India, South Asia",
    },
    {
      name: "Gujarat Tour Packages",
      imageUrl:
        "https://cdn.britannica.com/39/124439-050-AFA5CEC6/Sun-Temple-Modhera-Gujarat-India.jpg",
      location: "India, South Asia",
    },
    {
      name: "Hyderabad Tour Packages",
      imageUrl:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/09/15144355/Untitled-design-2-4.jpg",
      location: "India, South Asia",
    },
    {
      name: "Kerala Tour Packages",
      imageUrl:
        "https://www.hindustantimes.com/ht-img/img/2023/03/24/1600x900/Further-down--in-Kerala--God-s-Own-Country--held-i_1679599101590_1679646049345_1679646049345.jpg",
      location: "India, South Asia",
    },
    {
      name: "Lakshadweep Tour Packages",
      imageUrl:
        "https://themapofindia.com/superawesome/2021/05/Lakshadweep-scaled.jpg",
      location: "India, South Asia",
    },
    {
      name: "Tamil Nadu Tour Packages",
      imageUrl:
        "https://cdn.britannica.com/12/100812-050-27483D5E/Mamallapuram-Shore-Temple-Chennai-India-Tamil-Nadu.jpg",
      location: "India, South Asia",
    },
    {
      name: "Uttrakhand Tour Packages",
      imageUrl:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2020/04/Lakes-in-Uttrakhand.jpg",
      location: "India, South Asia",
    },
  ];

  return (
    <div
      name="kenya"
      className="my-12 flex flex-col items-center justify-center text-black gap-12"
    >
      <p className="text-6xl bursh-font">Our Destinations</p>
      <p className="india-font-1 font-urbanist text-2xl text-center pl-4">
        INDIA
      </p>

      <div className="grid grid-cols-2 place-items-center w-full mt-10 gap-12">
        {destinations.map((destination, index) => (
          <Link
            to={`/about`}
            key={index}
            className={`flex flex-col w-[500px] h-[500px] bg-white ${
              index % 2 === 0 ? "rounded-l-3xl" : "rounded-r-3xl"
            } drop-shadow-xl`}
          >
            <img
              src={destination.imageUrl}
              alt="placeholder"
              className={`${
                index % 2 === 0 ? "rounded-tl-3xl" : "rounded-tr-3xl"
              } min-h-[70%] w-full`}
            />
            <div className="p-4 flex flex-col justify-evenly h-full">
              <p className="text-black font-bold text-lg">{destination.name}</p>
              <p className="text-black">{destination.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default India;
