import { useState } from "react";
import logo from "../assets/logo.png";
import line from "../assets/line.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import aboutbg from "../assets/aboutbg.jpg";
import Footer from "../constants/Footer";
import gridabout from "../assets/gridabout.png";

function About() {
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
      <Section1 />
      <Section2 />
      <OurGroups />
      <Reviews />
      <Footer />
    </>
  );
}

function Header() {
  const handleCallClick = () => {
    // Use the `window.location` to initiate a phone call to the mobile number
    window.location.href = "tel:+1234567890"; // Replace with the desired mobile number
  };

  const handleEmailClick = () => {
    // Use the `window.location` to open the default email client
    window.location.href = "mailto:example@example.com"; // Replace with the desired email address
  };

  const handleDestinationsClick = () => {
    // Use the `window.location` to open the default email client
    window.location.href = "/destinations"; // Replace with the desired email address
  };
  const [enquire, setEnquire] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <Parallax
      strength={500}
      bgImageStyle={{
        objectFit: "cover",
        width: "100%",
        height: "100vh",
        // Apply the style only for mobile screens (max-width: 767px)
        "@media (max-width: 767px)": {
          objectFit: "cover",
          height: "100vh",
        },
      }}
      bgImage={aboutbg}
      className="relative flex flex-col font-primary min-h-screen bg-[#1B1A1A]"
    >
      <nav className="hidden pr-6 md:flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex gap-24 font-bold text-xl text-white">
          <Link to="/">HOME</Link>
          <Link to="/destinations">DESTINATIONS</Link>
          <a href="/services">OUR SERVICES</a>
          <a href="/gallery">GALLERY</a>
          <a href="/about">ABOUT US</a>
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
            <button onClick={handleDestinationsClick}>Book Online</button>
            <button onClick={handleEmailClick}>By Email</button>
            <button onClick={handleCallClick}>By Phone</button>
          </div>
        </div>
      </nav>

      <nav className="flex justify-between items-center md:hidden relative z-10">
        <Link to="/">
          <img className="w-32" src={logo} alt="Logo" />
        </Link>

        <div className="px-3">
          <i
            onClick={() => setNav(true)}
            className="fa-solid fa-bars text-4xl text-white"
          ></i>
        </div>
        <div
          className={`${
            nav ? "translate-x-0" : "translate-x-full"
          } duration-150 absolute top-0 w-full bg-black h-screen text-white justify-center px-12 py-8`}
        >
          <div className="w-full flex justify-end">
            <i
              onClick={() => setNav(false)}
              className="fa-solid fa-x text-xl"
            ></i>
          </div>

          <div className="flex flex-col gap-5 items-center text-2xl py-8 h-full">
            <Link to="/">HOME</Link>
            <Link to="/destinations">DESTINATIONS</Link>
            <a href="/services">OUR SERVICES</a>
            <a href="/gallery">GALLERY</a>
            <a href="/about">ABOUT US</a>

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
                    : "absolute top-16 h-f w-full bg-white text-black p-4 hidden flex-col gap-3 -translate-y-12 duration-200 -z-10"
                }
              >
                <a href="">Book Online</a>
                <a href="">By Email</a>
                <a href="">By Phone</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Parallax>
  );
}

function Section1() {
  return (
    <section className="py-8 about1">
      <h4 className="font-arbtus text-5xl text-center">
        We are Angantraya Birdseye
      </h4>
      <div className="flex justify-around py-12">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-adanda">12000+</p>
          <p className="font-noticia tracking-[3px]">ACTIVITES</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-adanda">125+</p>
          <p className="font-noticia tracking-[3px]">DESTINATIONS</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-adanda">5000+</p>
          <p className="font-noticia tracking-[3px]">SUPPLIERS</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-adanda">3.5M+</p>
          <p className="font-noticia tracking-[3px]">USERS / MONTH</p>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="min-h-[60vh] about2 py-12 flex items-end text-white">
      <div className="flex w-full justify-center gap-4 z-10">
        <p className="text-2xl font-noticia tracking-[3px]">ANDAMAN</p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-x border-white">
          BHUTAN
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-r border-white">
          NEPAL
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-r border-white">
          INDIA
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-r border-white">
          LAKSHADWEEP
        </p>
        <p className="text-2xl font-noticia tracking-[3px] px-4 border-r border-white">
          KENYA
        </p>
      </div>
    </section>
  );
}

function OurGroups() {
  return (
    <section className="py-12 px-6 flex flex-col justify-center about1">
      <h4 className="font-arbtus text-5xl text-center uppercase">Our Groups</h4>
      <div className="flex justify-around font-bold">
        <div className="flex flex-col items-center py-12 gap-7">
          <img src={gridabout} alt="gridabout" className="w-[250px]" />
          <p className="text-2xl font-noticia tracking-[3px]">AMAZONAWS</p>
        </div>
        <div className="flex flex-col items-center py-12 gap-7">
          <img src={gridabout} alt="gridabout" className="w-[250px]" />
          <p className="text-2xl font-noticia tracking-[3px]">AMAZONAWS</p>
        </div>
        <div className="flex flex-col items-center py-12 gap-7">
          <img src={gridabout} alt="gridabout" className="w-[250px]" />
          <p className="text-2xl font-noticia tracking-[3px]">AMAZONAWS</p>
        </div>
        <div className="flex flex-col items-center py-12 gap-7">
          <img src={gridabout} alt="gridabout" className="w-[250px]" />
          <p className="text-2xl font-noticia tracking-[3px]">AMAZONAWS</p>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [activePackage, setActivePackage] = useState(1);

  let title = {
    para: [
      "The name says it all, ‘One Above Destination Management Services’; we are not just a travel company or tour operator selling packages or an Event Management Company pairing the passion for social events and business or a MICE Operator facilitating specialized tours for corporates; we are an all-inclusive global Destination Management Company handling all the above verticals with ease, expertise and efficiency.     ",
    ],
    sub: [],
    last: [],
  };

  if (activePackage === 2) {
    title = {
      para: [
        "At Angantraya Birdseye LLP, we specialize in creating memorable travel experiences for both leisure and corporate clients. Our services encompass a wide range of offerings, including:",
      ],
      sub: [
        "Cultural Packages: Immerse yourself in uplifting cultural, artistic, and spiritual travel experiences.",
        "Corporate Packages: Tailored travel solutions for Meetings, Incentives, Conventions, and Events (MICE).",
        "Honeymoon Packages: Romantic getaways designed for newlyweds seeking unforgettable moments.",
      ],
      last: [
        "Our commitment is to deliver exceptional travel management services, ensuring satisfaction and creating lasting memories for our clients.",
      ],
    };
  }

  if (activePackage === 3) {
    title = {
      para: [
        "Our team at Angantraya Birdseye LLP consists of passionate and experienced professionals who are dedicated to providing the highest level of service. From destination management experts and travel consultants to corporate advisors and industry specialists, our team collaborates seamlessly to bring your travel dreams to life.",
      ],
      sub: [
        "[Founder's Name]: The visionary leader who laid the foundation of Angantraya Birdseye LLP, bringing a wealth of experience and passion for the travel industry.",
        "[Key Team Members]: A group of dynamic individuals with expertise in various facets of travel, corporate consultancy, and business management.",
        "[Support Staff]: Our dedicated support staff ensures smooth operations and excellent customer service.",
      ],
      last: [
        "Together, we form a cohesive unit committed to making every travel experience with Angantraya Birdseye LLP exceptional, seamless, and unforgettable.",
      ],
    };
  }

  return (
    <section className="p-12 flex flex-col">
      <div className="flex gap-12 ">
        <button
          className={`${
            activePackage === 1 ? "bg-black text-white" : "bg-white"
          } border-2 border-black p-3 px-6 font-bold font-adanda uppercase`}
          onClick={() => setActivePackage(1)}
        >
          Who We Are ?
        </button>

        <button
          className={`${
            activePackage === 2 ? "bg-black text-white" : "bg-white"
          } border-2 border-black p-3 px-6 font-bold font-adanda uppercase`}
          onClick={() => setActivePackage(2)}
        >
          What We DO ?
        </button>

        <button
          className={`${
            activePackage === 3 ? "bg-black text-white" : "bg-white"
          } border-2 border-black p-3 px-6 font-bold font-adanda uppercase`}
          onClick={() => setActivePackage(3)}
        >
          TEAM
        </button>
      </div>

      <div className="py-6">
        {title && title.sub && (
          <div className="font-amethysta font-normal text-xl my-8">
            {title.para.map((item, index) => (
              <p key={index} className="my-6">
                {item}
              </p>
            ))}
            <ol>
              {title.sub.map((item, index) => (
                <p key={index} className="my-6">
                  {activePackage === 2 && `${index + 1}.`}
                  {activePackage === 3 && `•`}
                  {item}
                </p>
              ))}
            </ol>
            {title.last.map((item, index) => (
              <p key={index} className="my-6">
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
