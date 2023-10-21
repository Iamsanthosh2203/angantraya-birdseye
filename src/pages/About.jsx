import { useState } from "react";
import logo from "../assets/logo.png";
import line1 from "../assets/line1.svg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import attraction1 from "../assets/attraction1.png";
import Footer from "../constants/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function About() {
  const [activePackage, setActivePackage] = useState(null);
  return (
    <>
      <Header
        activePackage={activePackage}
        setActivePackage={setActivePackage}
      />
      <Attractions activePackage={activePackage} />
      <Overview />
      <Itinerary />
      <Included />
      <NotIncluded />
      <Footer />
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Header({ activePackage, setActivePackage }) {
  const handleClick = (packageNumber) => {
    setActivePackage(packageNumber);
  };

  const [enquire, setEnquire] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for an instant scroll
    });
  }
  scrollToTop();

  return (
    <div id="sticky-header" className="bg-white">
      <style>
        {`
          #sticky-header {
            position: sticky;
            top: 0;
            z-index: 50;
          }
          /* Additional styling if needed */
        `}
      </style>
      <Parallax
        strength={500}
        className="flex flex-col font-primary text-black top-0 sticky z-50 w-full"
      >
        <nav className="pr-6 flex items-center justify-between w-full border-b-[1px] border-black ">
          <div>
            <img src={logo} alt="Logo" />
          </div>

          <div className="flex gap-24 font-bold text-xl">
            <Link to="/">HOME</Link>
            <Link to="/destinations">DESTINATIONS</Link>
            <a href="#services">OUR SERVICES</a>
            <a href="#gallery">GALLERY</a>
            <a href="#about">ABOUT US</a>
          </div>

          <div
            onClick={() => setEnquire(!enquire)}
            className="flex gap-2 relative"
          >
            <button>ENQUIRE NOW</button>
            <img src={line1} alt="" />

            <div
              className={
                enquire
                  ? "absolute top-16 h-f w-full bg-black text-white p-4 flex flex-col gap-3 translate-y-0 duration-200"
                  : "absolute flex top-16 h-f w-full  text-white p-4 flex-col gap-3 -translate-y-12 duration-200 -z-10"
              }
            >
              <a href="">Book Online</a>
              <a href="">By Email</a>
              <a href="">By Phone</a>
            </div>
          </div>
        </nav>

        <div className="flex justify-around my-4 font-arvo border-b pb-4 border-black">
          <button
            className={`${
              activePackage === 1 ? "bg-black text-white" : "bg-white"
            } border-2 border-black p-6 tracking-[5px]`}
            onClick={() => handleClick(1)}
          >
            PACKAGE 1
          </button>

          <button
            className={`${
              activePackage === 2 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-6 tracking-[5px]`}
            onClick={() => handleClick(2)}
          >
            PACKAGE 2
          </button>

          <button
            className={`${
              activePackage === 3 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-6 tracking-[5px]`}
            onClick={() => handleClick(3)}
          >
            PACKAGE 3
          </button>

          <button
            className={`${
              activePackage === 4 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-6 tracking-[5px]`}
            onClick={() => handleClick(4)}
          >
            PACKAGE 4
          </button>
        </div>

        <div className="flex justify-around font-amethysta text-xl border-b pb-4 border-black">
          <ScrollLink
            to="attractions"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={-700}
            duration={500}
          >
            Attractions
          </ScrollLink>
          <ScrollLink
            to="overview"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
          >
            Overview
          </ScrollLink>
          <ScrollLink
            to="itinerary"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
          >
            Itinerary
          </ScrollLink>
          <ScrollLink
            to="included"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
          >
            What’s Included
          </ScrollLink>
          <ScrollLink
            to="important"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
          >
            Important notes
          </ScrollLink>
        </div>
      </Parallax>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Attractions({ activePackage }) {
  let title = "ATTRACTIONS";

  if (activePackage === 2) {
    title = "ATTRACTIONS 2";
  } else if (activePackage === 3) {
    title = "ATTRACTIONS 3";
  } else if (activePackage === 4) {
    title = "ATTRACTIONS 4";
  }

  return (
    <section
      id="attractions"
      className="my-8 font-arvo tracking-[6px] text-3xl font-bold px-24"
    >
      <h2>{title}</h2>
      <div className="flex items-center">
        <div className="basis-[65%]">
          <ol className="list-disc font-peddana font-normal tracking-normal my-12 flex flex-col justify-around h-full px-12">
            <li className="text-with-space">
              Explore the historical significance of Cellular Jail and witness
              the captivating light and sound show depicting India&apos;s
              freedom struggle.
            </li>
            <li className="text-with-space">
              Relax on the pristine shores of Radha Nagar Beach, known for its
              crystal-clear waters and golden sands.
            </li>
            <li className="text-with-space">
              Snorkel amidst vibrant marine life and coral reefs at Elephant
              Beach, a paradise for underwater enthusiasts.
            </li>
            <li className="text-with-space">
              Enjoy the serene beauty of Kalapathar Beach and experience a
              tranquil stay on Neil Island.
            </li>
            <li className="text-with-space">
              Journey from Neil Island to Port Blair, taking in the scenic views
              of the Andaman Sea.
            </li>
          </ol>
        </div>
        <div className="basis-[35%]">
          <img src={attraction1} alt="attractions" />
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="overview" className="px-24 my-8 pr-52 text-xl">
      <h2 className="font-arvo text-3xl tracking-[6px] font-bold">OVERVIEW</h2>
      <p className="my-5 mt-12 text-5xl font-light">
        Pristine Paradise, Andaman&apos;s Natural Majesty.
      </p>

      <p className="text-with-space-1 text-2xl leading-10 my-12">
        The Andaman and Nicobar Islands, located in the Bay of Bengal, boast
        unparalleled natural beauty. With pristine white-sand beaches, lush
        tropical rainforests, and crystal-clear turquoise waters, this
        archipelago is a nature lover&apos;s paradise. The islands are renowned
        for their biodiversity, home to rare and endemic species of flora and
        fauna.
      </p>

      <p className="text-with-space-1 text-2xl leading-10 my-12">
        The underwater world is equally captivating, making it a top destination
        for snorkeling and scuba diving enthusiasts. Coral reefs teeming with
        colorful marine life and stunning coral formations are a highlight. The
        islands&apos; dense forests are inhabited by indigenous tribes, adding
        to their cultural richness.
      </p>

      <p className="text-with-space-1 text-2xl leading-10 my-12">
        The Andaman and Nicobar Islands offer a perfect blend of adventure and
        relaxation. Whether it&apos;s exploring secluded beaches, trekking
        through lush jungles, or simply basking in the sun, the islands provide
        a serene and rejuvenating experience. It&apos;s a place where
        nature&apos;s beauty is at its most untouched and enchanting, making it
        a must-visit destination for those seeking an escape into paradise.
      </p>
    </section>
  );
}

function Itinerary() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(
    new Array(6).fill(false) // Initialize an array of 6 elements with false
  );

  const toggleAccordion = (index) => {
    const updatedState = [...isAccordionOpen];
    updatedState[index] = !updatedState[index];
    setIsAccordionOpen(updatedState);
  };

  // Define an array of itinerary items
  const itineraryItems = [
    {
      day: "Day 1",
      title: "Corbyn's Beach, Cellular Jail, and Jail Light and Sound",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      day: "Day 2",
      title: "Havelock Island, Radha Nagar Beach",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      day: "Day 3",
      title: " Elephant Beach",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      day: "Day 4",
      title: "Kalapathar Beach and Stay in Neil Island",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      day: "Day 5",
      title: "Neil to Port Blair",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      day: "Day 6",
      title: "Shopping and Airport Drop",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    // Add more items here
  ];

  return (
    <section
      id="itinerary"
      style={{ background: "rgba(236, 234, 234, 0.70)" }}
      className="px-24 py-12"
    >
      <h2 className="font-arvo text-3xl tracking-[6px] font-bold capitalize pt-24 pb-12">
        ITINERARY
      </h2>
      <Accordion allowZeroExpanded={true}>
        {itineraryItems.map((item, index) => (
          <AccordionItem
            key={index}
            className="bg-white p-6 rounded-xl font-noticia text-xl my-4"
          >
            <AccordionItemHeading onClick={() => toggleAccordion(index)}>
              <AccordionItemButton>
                <div className="flex justify-between">
                  <p>
                    <span className="font-bold">{item.day}:</span> {item.title}
                  </p>
                  {/* arrow icon based on Accordion state */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 inline-block ml-4 transform ${
                      isAccordionOpen[index] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="my-8">{item.content}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Included() {
  const items = [
    {
      imageSrc: "https://placeholder.co/500x500",
      title: "Honeymoon Cake",
    },
    {
      imageSrc: "https://placeholder.co/500x500",
      title: "Honeymoon Cake",
    },
    {
      imageSrc: "https://placeholder.co/500x500",
      title: "Honeymoon Cake",
    },
    {
      imageSrc: "https://placeholder.co/500x500",
      title: "Honeymoon Cake",
    },
  ];

  const includedItems = [
    "Meet and Greet by our Tour Executives on arrival at Port Blair Airport.",
    "Airport Transfers and Sightseeing as per the Below-itinerary by A/C car.",
    "Accommodation in for 03 nights at Port Blair/2 Nights Havelock /1 Night Neil",
    "Daily Breakfast and Dinner at Hotels",
    "Entry permits, entry tickets, boat tickets wherever required.",
    "Port Blair to Havelock to Neil to Port Blair by Private Cruise.",
    "Assistance at all arrival and departure points wherever required.",
  ];

  return (
    <section id="included" className="px-24">
      <h2 className="font-arvo text-3xl tracking-[6px] font-bold capitalize pt-24 pb-12">
        WHAT’S INCLUDED
      </h2>

      <div className="grid grid-cols-2 gap-12 mt-12">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 items-center">
            <img
              src={item.imageSrc}
              alt="placeholder"
              className="rounded-full h-[500px] w-[500px] object-cover"
            />
            <p className="text-xl font-bold uppercase">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="px-24 pt-44 pb-12 text-2xl">
        <ol className="list-disc flex-col flex items list-outside gap-8">
          {includedItems.map((item, index) => (
            <li className="text-with-space-1" key={index}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function NotIncluded() {
  const notIncludedItems = [
    "GST 5%",
    "All kind of personal expenses such as tips, laundry, telephone bills and beverages.",
    "It also does not include any meals unless and otherwise specifically mentioned.",
    "Optional, suggested or unspecified activities.",
    "Camera fee (still or movie)",
    "It also not includes Undersea Walk (Sea walking) and Game Fishing and Snorkeling and all other",
    "Water Sport",
  ];

  return (
    <section
      id="important"
      style={{ background: "rgba(236, 234, 234, 0.70)" }}
      className="px-24 py-12"
    >
      <h2 className="font-arvo text-3xl tracking-[6px] font-bold capitalize py-12">
        WHAT’S NOT INCLUDED
      </h2>

      <ol className="list-disc flex flex-col gap-4 px-12 text-2xl">
        {notIncludedItems.map((item, index) => (
          <li className="text-with-space-1 uppercase" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default About;
