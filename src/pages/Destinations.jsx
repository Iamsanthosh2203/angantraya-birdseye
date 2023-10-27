import { useState } from "react";
import logo from "../assets/logo.png";
import line from "../assets/line.svg";
import { Link, Element } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import { Parallax } from "react-parallax";

import tajmahal from "../assets/tajmahal.jpg";

function Destinations() {
  return (
    <>
      <Header />
      <Bhutan />
      <India />
      <Kenya />
      <Nepal />
    </>
  );
}

function Header() {
  const [enquire, setEnquire] = useState(false);

  return (
    <header className="px-12 relative py-5 flex flex-col font-primary min-h-screen bg-[#1B1A1A] bg-fixed">
      <nav className="flex items-center justify-between w-full">
        <RouterLink to="/">
          <img src={logo} alt="Logo" />
        </RouterLink>

        <div className="flex gap-24 font-bold text-xl text-white">
          <RouterLink to="/">HOME</RouterLink>
          <RouterLink to="/destinations">DESTINATIONS</RouterLink>
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

      <div className="grid-cols-2 w-full text-white grid mx-auto gap-8 place-items-center">
        <Link
          to="bhutan"
          className="group cursor-pointer"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img
            src="https://assets.cntraveller.in/photos/612f97214eaffd3ac697992a/4:3/w_4032,h_3024,c_limit/LICENSE_Karma%20Dorji_(c)%20Getty_Thimphu%20Bhutan_CNT%20UK_Karin_GettyImages-1285422736.jpg"
            alt="placeholder"
            className="w-[400px] opacity-50 group-hover:opacity-100 h-[400px] rounded-full group-hover:scale-[1.05] duration-150 object-cover"
          />
          <h2 className="text-center font-primary tracking-widest mt-5 text-2xl">
            BHUTAN
          </h2>
        </Link>

        <Link
          to="india"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="group cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg"
            alt="placeholder"
            className="w-[400px] opacity-50 group-hover:opacity-100 h-[400px] rounded-full group-hover:scale-[1.05] duration-150 object-cover"
          />
          <h2 className="text-center font-primary tracking-widest mt-5 text-2xl">
            INDIA
          </h2>
        </Link>

        <Link
          to="kenya"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="group cursor-pointer"
        >
          <img
            src="https://www.hindustantimes.com/ht-img/img/2023/08/24/1600x900/Kenyan_grassland_1683031559422_1692855575009.jpg"
            alt="placeholder"
            className="w-[400px] opacity-50 group-hover:opacity-100 h-[400px] rounded-full group-hover:scale-[1.05] duration-150 object-cover"
          />
          <h2 className="text-center font-primary tracking-widest mt-5 text-2xl">
            KENYA
          </h2>
        </Link>

        <Link
          to="nepal"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="group cursor-pointer"
        >
          <img
            src="https://static.toiimg.com/photo/69789748.cms"
            alt="placeholder"
            className="w-[400px] opacity-50 group-hover:opacity-100 h-[400px] rounded-full group-hover:scale-[1.05] duration-150 object-cover"
          />
          <h2 className="text-center font-primary tracking-widest mt-5 text-2xl">
            NEPAL
          </h2>
        </Link>
      </div>
    </header>
  );
}

function Bhutan() {
  const imageSource =
    "https://assets.cntraveller.in/photos/612f97214eaffd3ac697992a/4:3/w_4032,h_3024,c_limit/LICENSE_Karma%20Dorji_(c)%20Getty_Thimphu%20Bhutan_CNT%20UK_Karin_GettyImages-1285422736.jpg";

  return (
    <Parallax
      id="bhutan"
      bgImage={imageSource}
      strength={500} // Adjust this value to control the parallax effect strength
      className="h-screen font-recursive flex flex-col justify-center"
      renderLayer={(percentage) => (
        <Element
          name="bhutan"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0, 0, 0, ${0.3 * percentage})`, // Adjust the opacity (0.5) to your preference
          }}
          className="flex flex-col pl-28 justify-center text-white gap-12 font-recursive"
        >
          <h2
            className="text-7xl font-bold tracking-widest"
            style={{ position: "relative", zIndex: 1 }}
          >
            BHUTAN
          </h2>
          <p className="text-5xl leading-relaxed">
            Explore the city <br />
            known for its rich <br />
            history and cuisine
          </p>
          <div>
            {" "}
            <button className="px-12 py-5 rounded-3xl bg-white text-black">
              Explore
            </button>
          </div>
        </Element>
      )}
    />
  );
}

function India() {
  const imageSource = tajmahal;

  return (
    <Parallax
      id="india"
      bgImage={imageSource}
      strength={500} // Adjust this value to control the parallax effect strength
      className="h-screen font-recursive flex flex-col justify-center"
      renderLayer={(percentage) => (
        <Element
          name="india"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0, 0, 0, ${0.3 * percentage})`, // Adjust the opacity (0.5) to your preference
          }}
          className="flex flex-col pl-28 justify-center text-white gap-12"
        >
          <h2
            className="text-7xl font-bold tracking-widest"
            style={{ position: "relative", zIndex: 1 }}
          >
            INDIA
          </h2>
          <p className="text-5xl leading-relaxed">
            Explore its diverse <br />
            cultures and enchanting <br />
            landscapes
          </p>
          <div>
            {" "}
            <RouterLink
              to="/india"
              className="px-12 py-5 rounded-3xl bg-white text-black"
            >
              Explore
            </RouterLink>
          </div>
        </Element>
      )}
    />
  );
}

function Kenya() {
  const imageSource =
    "https://www.hindustantimes.com/ht-img/img/2023/08/24/1600x900/Kenyan_grassland_1683031559422_1692855575009.jpg";

  return (
    <Parallax
      id="kenya"
      bgImage={imageSource}
      strength={500} // Adjust this value to control the parallax effect strength
      className="h-screen font-recursive flex flex-col justify-center"
      renderLayer={(percentage) => (
        <Element
          name="kenya"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0, 0, 0, ${0.3 * percentage})`, // Adjust the opacity (0.5) to your preference
          }}
          className="flex flex-col pl-28 justify-center text-white gap-12"
        >
          <h2
            className="text-7xl font-bold tracking-widest"
            style={{ position: "relative", zIndex: 1 }}
          >
            KENYA
          </h2>
          <p className="text-5xl leading-relaxed">
            Explore its diverse <br />
            cultures and enchanting <br />
            landscapes
          </p>
          <div>
            {" "}
            <button className="px-12 py-5 rounded-3xl bg-white text-black">
              Explore
            </button>
          </div>
        </Element>
      )}
    />
  );
}

function Nepal() {
  const imageSource = "https://static.toiimg.com/photo/69789748.cms";

  return (
    <Parallax
      id="nepal"
      bgImage={imageSource}
      strength={500} // Adjust this value to control the parallax effect strength
      className="h-screen font-recursive flex flex-col justify-center"
      renderLayer={(percentage) => (
        <Element
          name="nepal"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0, 0, 0, ${0.3 * percentage})`, // Adjust the opacity (0.5) to your preference
          }}
          className="flex flex-col pl-28 justify-center text-white gap-12"
        >
          <h2
            className="text-7xl font-bold tracking-widest"
            style={{ position: "relative", zIndex: 1 }}
          >
            NEPAL
          </h2>
          <p className="text-5xl leading-relaxed">
            Explore the Land <br />
            of the Rising Sun
          </p>
          <div>
            {" "}
            <button className="px-12 py-5 rounded-3xl bg-white text-black">
              Explore
            </button>
          </div>
        </Element>
      )}
    />
  );
}

export default Destinations;
