import logo from "../assets/logo.png";
import line from "../assets/line.svg";
import work from "../assets/work.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import location from "../assets/location.png";
import dots from "../assets/dots.svg";
import maplogo from "../assets/maplogo.svg";
import uparrow from "../assets/uparrow.png";
import booking from "../assets/booking.png";
import cloudy from "../assets/cloudy.png";
import destination from "../assets/destination.png";

import Reviews from "../constants/Reviews";
import Newsletter from "../constants/Newsletter";
import Footer from "../constants/Footer";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";

function Home() {
  return (
    <>
      <Header />
      <Explore />
      <Destinations />
      <TravelPoint />
      <Services />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}

function Header() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for an instant scroll
    });
  }
  scrollToTop();

  const [enquire, setEnquire] = useState(false);
  return (
    <Parallax
      strength={500}
      bgImage="https://assets.codepen.io/6093409/river.mp4"
      className="relative flex flex-col font-primary h-screen"
    >
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://rr3---sn-h5576ns6.c.drive.google.com/videoplayback?expire=1698337009&ei=wWY6ZdDYLNHAp84PuOid6A0&ip=2405:201:e046:c828:cdbe:3a22:f0e1:34ff&cp=QVROWkRfVlBOSlhPOmNMM3k5Y3ZOS1ZYZm16Y0o2cGJELTcwWGp3WHdkMXVkUkV3Ujh6Nkx0d3Y&id=2b2fea16988346bb&itag=37&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=Mm&mm=32&mn=sn-h5576ns6&ms=su&mv=m&mvi=3&pl=49&ttl=transient&susc=dr&driveid=16G_5YuHbKk49E1-TRWBM7Pa6MZOa8_Ah&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=39.822&lmt=1697803623298308&mt=1698325765&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRgIhAN31McLL_1PdQhWbuz8GBazIJQ9vMbABEYcVaKlU9R2sAiEAlfQD37fOwDRgqiiEdb_NtsIDCmLXbmU4enpMB8IKbkM=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRAIgK8E5PEH1WNmJPuH6tSjr9MIfmsHeZFlulZL3fsmam98CIGQ_DFE2Ty_5s-FKejTBGg8KnZQLsW6bbwReqQ9CMuov&cpn=21TSZGvbdSPoSGW7&c=WEB_EMBEDDED_PLAYER&cver=1.20231022.00.01"
          type="video/mp4"
        />
      </video>

      <nav className="px-12 flex items-center justify-between w-full">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex gap-24 font-bold text-xl text-white">
          <a href="#home">HOME</a>
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
                : "absolute top-16 h-f w-full bg-white text-black p-4 flex flex-col gap-3 -translate-y-12 duration-200 -z-10"
            }
          >
            <a href="">Book Online</a>
            <a href="">By Email</a>
            <a href="">By Phone</a>
          </div>
        </div>
      </nav>
    </Parallax>
  );
}

function Explore() {
  return (
    <section className="min-h-screen py-10 explore flex items-center min-w-[70%] mx-auto justify-around">
      <div className="flex flex-col gap-14">
        <div>
          <button className="p-4 px-7 font-bold rounded-full bg-white shadow-xl flex gap-4">
            Explore the world!
            <img src={work} alt="" />
          </button>
        </div>

        <h2 className="text-6xl  font-adanda font-bold">
          Travel <span className="text-[#F85E9F]">top</span> <br />{" "}
          <span className="text-[#F85E9F]">destination</span> <br />
          of the world
        </h2>

        <p className="text-xl">
          We always make our customer happy by providing <br />
          as many choices as possible
        </p>

        <div>
          <button className="px-6 py-4 shadow-xl bg-[#5D50C6] rounded-full">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8 explore-img">
        <div className="flex flex-col gap-8">
          <img className="hover:scale-105 duration-300" src={img2} alt={img2} />
          <img className="hover:scale-105 duration-300" src={img3} alt={img3} />
        </div>
        <div>
          <img className="hover:scale-105 duration-300" src={img1} alt={img1} />
          <button className="-translate-y-[200%] translate-x-[100%] shadow-xl px-12 p-4 bg-white rounded-full z-10 flex gap-3">
            <img src={location} alt="location" />
            Top Places
          </button>

          <button className="h-12 w-12 bg-[#FF5722] rounded-full translate-x-[200%]">
            <i className="fa-solid fa-user-plus text-white"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section className="flex flex-col h-screen bg-[#b9b3b324] px-20 py-24 justify-around">
      <div className="flex justify-around">
        <div className="flex gap-12">
          <div>
            <img src={dots} alt="stars" />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg text-[#F85E9F] font-bold tracking-[5px]">
              TOP DESTINATIONS
            </p>
            <h2 className="text-xl font-bold">Explore top destination</h2>
          </div>
        </div>

        <div>
          {/* generate left arrow in fontawesome */}
          <div className="cursor-pointer h-12 w-12 bg-[#5D50C6] rounded-full flex items-center justify-center shadow-xl">
            <i className="fa-solid fa-chevron-right text-white"></i>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mx-auto gap-24">
        {/* item 1 */}
        <Link
          to="/india"
          className="hover:scale-110 cursor-pointer duration-150 h-[500px] w-80 rounded-xl bg-white shadow-lg flex-col"
        >
          <div className="h-[60%] w-full rounded-t-xl bg-img-india" />
          <div className="flex flex-col p-12 gap-7">
            <h3 className="font-bold font-adanda text-xl">
              Explore the Colors of Culture and Nature
            </h3>
            <p className="font-adanda">India, South Asia</p>
          </div>
        </Link>

        {/* item 2 */}
        <div className="hover:scale-110 cursor-pointer duration-150 h-[500px] w-80 rounded-xl bg-white shadow-lg flex-col">
          <div className="h-[60%] w-full rounded-t-xl bg-img-placeholder" />
          <div className="flex flex-col p-12 gap-7">
            <h3 className="font-bold font-adanda text-xl">
              Where Adventure Meets Safari
            </h3>
            <p className="font-adanda">Kenya, East Africa</p>
          </div>
        </div>

        {/* item 3 */}
        <div className="hover:scale-110 duration-150 cursor-pointer h-[500px] w-80 rounded-xl bg-white shadow-lg flex-col">
          <div className="h-[60%] w-full rounded-t-xl bg-img-placeholder" />
          <div className="flex flex-col p-12 gap-7">
            <h3 className="font-bold font-adanda text-lg">
              Discover Lakshadweep: Nature&rsquo;s Hidden Paradise
            </h3>
            <p className="font-adanda">Lakshadweep, South Asia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TravelPoint() {
  return (
    <section className="h-screen my-28 mx-28 flex bg-map bg-white">
      <div className="flex flex-col px-24 py-20 justify-evenly">
        <div className="flex items-center gap-5 px-8 py-2 rounded-full bg-[#ffffff9b] w-1/2">
          {/* generate map on font awesome */}

          <img src={maplogo} alt="" />

          <p className="tracking-widest font-primary">Paradise on Earth</p>
        </div>

        <div className="flex flex-col gap-12 w-[70%]">
          <p className="text-xl font-bold tracking-[4px]">TRAVEL POINT</p>
          <h3 className="tracking-wider text-6xl font-alfa">
            We helping you to find your dream location.
          </h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center basis-[80%]">
        <div className="grid gap-12 grid-cols-2">
          <div className="p-8 bg-white rounded-3xl flex flex-col items-center shadow-xl">
            <p className="text-[#FF5722] text-4xl font-bold mb-4">800+</p>
            <p className="text-xl">Holiday Package</p>
          </div>

          <div className="p-8 bg-white rounded-3xl flex flex-col items-center shadow-xl">
            <p className="text-[#FF5722] text-4xl font-bold mb-4">100</p>
            <p className="text-xl">Luxury Hotels</p>
          </div>

          <div className="p-8 bg-white rounded-3xl flex flex-col items-center shadow-xl">
            <p className="text-[#FF5722] text-4xl font-bold mb-4">7</p>
            <p className="text-xl">Permium Airlines</p>
          </div>

          <div className="p-8 bg-white rounded-3xl flex flex-col items-center shadow-xl">
            <p className="text-[#FF5722] text-4xl font-bold mb-4">2k+</p>
            <p className="text-xl">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="px-20 min-h-[70vh] flex justify-between items-center ">
      <div className="flex gap-7">
        <img src={uparrow} alt="uparrow" />
        <div className="flex flex-col justify-around">
          <h4 className="tracking-widest uppercase text-xl text-[#F85E9F] font-bold">
            Services
          </h4>
          <p className="text-5xl font-bold">
            Our top value <br /> categories for you
          </p>
        </div>
      </div>

      <div className="h-[70vh] basis-[70%]  flex items-center">
        <div className="flex flex-col items-center justify-evenly px-6 h-full">
          <div className="grid grid-cols-3 gap-12 h-[70%]">
            <div className="flex flex-col bg-white drop-shadow-2xl hover:scale-110 duration-200 items-center p-12 rounded-3xl justify-evenly">
              <div className="mb-12">
                <img src={destination} alt="destination" />
              </div>
              <h6 className="font-bold text-3xl">Best Tour Guide</h6>
              <p className="text-center text-xl">
                What looked like a small <br /> patch of purple grass, <br />
                above five feet.
              </p>
            </div>

            <div className="flex flex-col bg-white drop-shadow-2xl items-center p-12 rounded-3xl hover:scale-110 duration-200 justify-evenly">
              <div className="mb-12">
                <img src={booking} alt="booking" />
              </div>
              <h6 className="font-bold text-3xl">Easy Booking</h6>
              <p className="text-center text-xl">
                Square, was moving across the sand in their direction.
              </p>
            </div>

            <div className="flex flex-col bg-white drop-shadow-2xl items-center p-12 rounded-3xl hover:scale-110 duration-200 justify-evenly">
              <div className="mb-12">
                <img src={cloudy} alt="cloudy" />
              </div>
              <h6 className="font-bold text-3xl">Weather Forecast</h6>
              <p className="text-center text-xl">
                What looked like a small patch of purple grass, above five feet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
