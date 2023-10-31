/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import line1 from "../assets/line1.svg";

import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Footer from "../constants/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import attraction1 from "../assets/attraction1.png";

function BangloreAbout() {
  const [activePackage, setActivePackage] = useState(1);
  return (
    <>
      <ScrollToTopButton />
      <Header
        activePackage={activePackage}
        setActivePackage={setActivePackage}
      />
      <Attractions activePackage={activePackage} />
      <Overview activePackage={activePackage} />
      <Itinerary activePackage={activePackage} />
      <Included activePackage={activePackage} />
      <NotIncluded activePackage={activePackage} />
      <Booking />
      <Footer />
    </>
  );
}
function ScrollToTopButton() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Check if the screen width is less than a certain threshold (e.g., 768px) to determine if it's a mobile screen
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
  };

  // Listen for window resize events to update the isMobile state
  useEffect(() => {
    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isMobile ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
}
// eslint-disable-next-line react/prop-types
function Header({ activePackage, setActivePackage }) {
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
        <nav className="pr-6 hidden md:flex items-center justify-between w-full border-b-[1px] border-black ">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

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
              <button onClick={handleDestinationsClick}>Book Online</button>
              <button onClick={handleEmailClick}>By Email</button>
              <button onClick={handleCallClick}>By Phone</button>
            </div>
          </div>
        </nav>

        <nav className="flex justify-between items-center md:hidden relative z-10 bg-black">
          <Link to="/">
            <img className="w-32" src={logo} alt="Logo" />
          </Link>

          <div className="px-3">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-4 text-black bg-white"
            >
              Go Back
            </button>
          </div>
        </nav>

        <div className="px-4 md:px-0 flex gap-4 md:justify-around my-4 font-arvo border-b pb-4 border-black overflow-x-auto">
          <button
            className={`${
              activePackage === 1 ? "bg-black text-white" : "bg-white"
            } border-2 border-black p-3 md:p-6 tracking-[5px]`}
            onClick={() => handleClick(1)}
          >
            PACKAGE 1
          </button>

          <button
            className={`${
              activePackage === 2 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-3 md:p-6 tracking-[5px]`}
            onClick={() => handleClick(2)}
          >
            PACKAGE 2
          </button>

          <button
            className={`${
              activePackage === 3 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-3 md:p-6 tracking-[5px]`}
            onClick={() => handleClick(3)}
          >
            PACKAGE 3
          </button>

          <button
            className={`${
              activePackage === 4 ? "bg-black text-white" : "bg-white"
            } text-black border-2 border-black p-3 md:p-6 tracking-[5px]`}
            onClick={() => handleClick(4)}
          >
            PACKAGE 4
          </button>
        </div>

        <div className="flex overflow-x-auto items-center gap-6 md:justify-around font-amethysta text-xl border-b pb-4 border-black">
          <ScrollLink
            to="overview"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Overview
          </ScrollLink>
          <ScrollLink
            to="itinerary"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Itinerary
          </ScrollLink>
          <ScrollLink
            to="included"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            What’s Included
          </ScrollLink>
          <ScrollLink
            to="important"
            className="group cursor-pointer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Important notes
          </ScrollLink>
        </div>
      </Parallax>
    </div>
  );
}

function Attractions({ activePackage }) {
  let title = "Bangalore to Coorg Tour";

  if (activePackage === 2) {
    title = "Bangalore to Mysore Tour (2 Days)";
  } else if (activePackage === 3) {
    title = " Mysore Coorg Tour";
  }

  return (
    <section
      id="attractions"
      className="my-8 font-arvo text-3xl font-bold md:px-24 px-8"
    >
      <h2 className="py-4">{title}</h2>
      <div className="flex items-center flex-col-reverse md:flex-row"></div>
    </section>
  );
}

function Overview({ activePackage }) {
  let description =
    "Coorg, also known as Kodagu, is a picturesque destination with its misty valleys, coffee plantations, and a rich cultural heritage. This 2-3 day tour from Bangalore offers an opportunity to explore Coorg's natural beauty, historical sites, and unique experiences. From the mesmerizing Abbey Falls to the tranquil Dubare Elephant Camp and the intricate Tibetan architecture at Namdroling Monastery, this package is packed with diverse attractions. You'll also visit the Madikeri Fort and Museum, offering insights into Coorg's history and culture.";

  if (activePackage === 2) {
    description =
      "Mysore, a city steeped in history and grandeur, promises a blend of the regal past and modern comfort. This 2-day tour from Bangalore offers an opportunity to explore the best of both worlds. From the opulent palaces to lush green sandalwood forests and architectural marvels, Mysore has something for every traveler. Experience the deep-rooted history and architectural wonders, while also enjoying the serene surroundings and modern amenities.";
  } else if (activePackage === 3) {
    description =
      "This 4-day tour takes you through the enchanting cities of Mysore and Coorg, offering a blend of cultural exploration and natural beauty. Mysore, known as the 'City of Palaces,' boasts magnificent royal residences and gardens. Coorg, on the other hand, is renowned for its scenic landscapes, coffee plantations, and serene waterfalls. This tour package allows you to experience the best of both worlds in Karnataka, India.";
  }

  return (
    <section
      id="overview"
      className="px-6 md:px-24 my-8 md:pr-52 text-xl flex justify-between md:flex-row flex-col-reverse items-center"
    >
      <div className="md:basis-[55%]">
        <h2 className="font-arvo text-3xl tracking-[6px] font-bold">
          OVERVIEW
        </h2>
        {/* <p className="my-5 mt-12 text-5xl font-light">{title}</p> */}

        <p className="text-with-space-1 text-2xl leading-10 my-12">
          {description}
        </p>
      </div>

      <div className="md:basis-[40%]">
        <img src={attraction1} className="my-4" alt="attractions" />
      </div>
    </section>
  );
}

function Itinerary({ activePackage }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(
    new Array(6).fill(false) // Initialize an array of 6 elements with false
  );

  const toggleAccordion = (index) => {
    const updatedState = [...isAccordionOpen];
    updatedState[index] = !updatedState[index];
    setIsAccordionOpen(updatedState);
  };

  // Define an array of itinerary items
  let itineraryItems = [
    {
      day: "Day 1",
      title: "Arrival in Coorg",
      content: [
        "Depart from Bangalore and enjoy an overnight journey.",
        "Pick-up from select points in Bangalore.",
        "Arrive in Coorg.",
      ],
    },
    {
      day: "Day 2",
      title: "Coorg Sightseeing",
      content: [
        "Explore Dubare Elephant Camp and interact with elephants.",
        "Visit Chiklihole Reservoir and Nisargadhama Deer Park.",
        "Optional lunch (at your expense).",
        "Discover Bylakuppe and the Tibetan Flea Market.",
        "Explore Harangi Dam or Harangi Backwaters.",
        "Return to the hotel for dinner and an overnight stay in Coorg.",
      ],
    },
    {
      day: "Day 3",
      title: "More Coorg Sightseeing and Departure",
      content: [
        "Visit Raja's Seat viewpoint for panoramic views.",
        "Explore Madikeri Fort and Museum.",
        "Discover Omkareshwara Temple.",
        "Enjoy the beauty of Abbey Falls.",
        "Optional lunch (at your expense).",
        "Explore Mercara Gold Estate Coffee Plantation.",
        "Visit local markets for souvenirs.",
        "Return to Bangalore.",
      ],
    },
  ];

  if (activePackage === 2) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Bangalore: Welcome to the Silicon City of India",
        content: [
          "Arrival at Bangalore airport or railway station.",
          "Visit Bangalore Palace, ISKON Temple, and Lalbagh Botanical Garden.",
          "Check-in at your hotel in Bangalore.",
        ],
      },
      {
        day: "Day 2",
        title: "Bangalore to Mysore: Wander at the City of Palaces",
        content: [
          "Breakfast at the hotel.",
          "Drive to Mysore, visiting Chamundeshwari Temple en-route.",
          "Explore Mysore Palace, St. Philomena's Cathedral, and Vrindavan Gardens.",
          "Check-in at your hotel in Mysore.",
        ],
      },
      {
        day: "Day 3",
        title: "Departure from Mysore: Time to Say Goodbye",
        content: [
          "Breakfast at the hotel.",
          "Check-out from the hotel and drive back to Bangalore.",
          "Drop-off at the airport or railway station for your journey back home.",
        ],
      },
      // Add more items for other packages as needed
    ];
  }

  if (activePackage === 3) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Munnar: Sightseeing",
        content: [
          "Arrival: Your romantic journey begins as you arrive at Cochin airport or railway station. The mesmerizing greenery and refreshing air welcome you to Munnar.",
          "Sightseeing: Explore the vast tea plantations, colonial bungalows, and visit Valara and Cheeyappara Falls on the way. Experience the untamed beauty of spice plantations.",
          "Accommodation: Check in to your hotel in Munnar.",
          "Shopping: Visit the local markets and collect souvenirs.",
          "Overnight: Enjoy a peaceful night at your cozy hotel.",
        ],
      },
      {
        day: "Day 2",
        title: "Munnar: Shopping, Leisure Time",
        content: [
          "Breakfast: Start your day with a delicious breakfast.",
          "Shopping: Spend quality time with your partner as you go shopping and strengthen your bond.",
          "Leisure Time: Return to your hotel for relaxation, setting the stage for a memorable night together.",
        ],
      },
      {
        day: "Day 3",
        title: "Alleppey: Sightseeing, Transfer to Alleppey",
        content: [
          "Breakfast: Enjoy a delightful breakfast.",
          "Sightseeing: Visit Eravikulam National Park, home to the endangered Nilgiri Tahr, and take a park bus ride through the lush green hills.",
          "Tea Museum: Explore the nuances of tea processing and savor a cup of tea.",
          "Tour Highlights: Continue your journey with visits to Rose Garden, Photo Point, Mattupetty Dam, Elephant Arrival Point, and Echo Point. If you obtain permission, you may visit the Indo Swiss Project.",
          "Drive to Alleppey: Embark on a scenic drive to Alleppey, a serene destination flanked by backwaters, coconut palms, and paddy fields.",
          "Accommodation: Check in to your hotel in Alleppey.",
          "Rest and Relaxation: Unwind and enjoy a peaceful night's sleep.",
        ],
      },
      {
        day: "Day 4",
        title: "Alleppey: Departure",
        content: [
          "Breakfast: Begin your day with a hearty breakfast.",
          "Departure: Pack your bags with unforgettable memories as you prepare to depart for your city. You may choose to board a train, airplane, or bus.",
        ],
      },
      // Add more items here
    ];
  }

  if (activePackage === 4) {
    itineraryItems = [
      {
        day: "Day 1",
        title: "Welcome to Kerala, Transfer to Munnar",
        content: [
          "Airport transfer and sightseeing",
          "Arrive at Cochin Airport",
          "Visit Spice Plantations, Valara, and Cheeyappara Falls en route to Munnar",
          "Check-in at the hotel in Munnar",
          "Leisure time to explore the local markets",
          "Overnight stay at the hotel in Munnar",
        ],
      },
      {
        day: "Day 2",
        title: "Sightseeing at Munnar",
        content: [
          "Breakfast at the hotel",
          "Full-day sightseeing tour of Munnar",
          "Visit Mattupetty Dam, Echo Point, Nursery Garden, Photo Point, Eravikulam National Park, Anaimudi Peak, and Tea Museum",
          "Overnight stay at the hotel in Munnar",
        ],
      },
      {
        day: "Day 3",
        title: "Transfer to Thekkady",
        content: [
          "Breakfast at the hotel",
          "Journey to Thekkady through scenic landscapes",
          "Check-in at the hotel in Thekkady",
          "Enjoy a wildlife safari at the Periyar Tiger Reserve",
          "Overnight stay at the hotel in Thekkady",
        ],
      },
      {
        day: "Day 4",
        title: "Thekkady to Alleppey",
        content: [
          "Breakfast at the hotel",
          "Travel to Alleppey, a land of serene backwaters",
          "Check-in at a Kerala houseboat",
          "Cruise through the intricate network of canals",
          "Enjoy lunch, dinner, and an overnight stay on the houseboat",
        ],
      },
      {
        day: "Day 5",
        title: "Departure from Alleppey",
        content: ["Breakfast on the houseboat", "Disembark from the houseboat"],
      },
      // Add more items here
    ];
  }

  return (
    <section
      id="itinerary"
      style={{ background: "rgba(236, 234, 234, 0.70)" }}
      className="px-7 md:px-24 py-12"
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
              {/* Map and render content items as a list */}
              <ul className="py-4 px-4">
                {item.content.map((contentItem, contentIndex) => (
                  <li className="list-disc list-inside" key={contentIndex}>
                    {contentItem}
                  </li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Included({ activePackage }) {
  let includedItems = [
    "Accommodation in well-appointed hotels",
    "Private transfers from Kochi Airport or Railway Station",
    "Sightseeing tours in Kochi and Munnar as per the itinerary",
    "Breakfast included at the hotels",
    "Comfortable overnight stays in Kochi and Munnar",
    "Scenic drive through the Western Ghats",
    "Visits to Cheeyappara and Valara Waterfalls",
    "Exploration of tea plantations, Eravikulam National Park, Mattupetty Dam, Kundala Lake, Echo Point, and Top Station",
  ];

  if (activePackage === 2) {
    includedItems = [
      "Accommodation in comfortable hotels.",
      "Daily breakfast and dinner.",
      "Transfers between destinations.",
      "Sightseeing tours as per the itinerary.",
      "Houseboat stay in Alleppey.",
      "Jungle safari in Periyar Wildlife Sanctuary.",
      "All applicable taxes.",
    ];
  }

  if (activePackage === 3) {
    includedItems = [
      "Accommodation for 1 double room",
      "All transfers and sightseeing in an A/C Sedan",
      "Meals: Breakfast at the hotel, and all meals on the houseboat",
      "Airport/Railway Station Transfers",
      "Parking/Toll/Driver Bata/Fuel Costs",
      "GST/VAT/Service Charges",
    ];
  }

  if (activePackage === 4) {
    includedItems = [
      "Accommodation in hotels and a Kerala houseboat",
      "Breakfast at hotels",
      "All meals during the houseboat stay",
      "Airport and railway station transfers",
      "Parking, tolls, driver allowance, and fuel costs",
      "GST, VAT, and service charges",
      "Sightseeing transfers by cab",
      "Full-day sightseeing in Munnar",
      "Wildlife safari in Thekkady",
    ];
  }

  return (
    <section id="included" className="md:px-24">
      <h2 className="font-arvo text-xl md:text-3xl tracking-[6px] font-bold capitalize pt-24 pb-12 text-center">
        WHAT’S INCLUDED
      </h2>

      <div className="md:px-24 px-5 py-5 md:pb-12 text-2xl">
        <ol className="list-disc list-inside flex-col flex items gap-8 text-xl">
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

function NotIncluded({ activePackage }) {
  let notIncludedItems = [
    "Airfare or train tickets to and from Kochi",
    "Personal expenses, meals other than breakfast, and optional activities",
    "Travel insurance",
    "Any expenses incurred due to unforeseen circumstances or situations beyond our control",
  ];

  if (activePackage === 2) {
    notIncludedItems = [
      "Airfare or train tickets.",
      "Lunch and any meals not mentioned in the itinerary.",
      "Entry fees to monuments, museums, and other attractions.",
      "Personal expenses, such as shopping, laundry, and phone calls.",
      "Travel insurance.",
      "Optional activities and excursions.",
      "Any expenses incurred due to unforeseen circumstances (e.g., flight delays, natural disasters, etc.)",
    ];
  }

  if (activePackage === 3) {
    notIncludedItems = [
      "5% Government service tax",
      "Personal expenses like tipping, laundry, telephone/fax calls, alcoholic beverages, and camera/video camera fees at monuments",
      "Medical expenses",
      "Airport departure tax",
      "Entrance fees at monuments/sightseeing places",
      "Costs due to itinerary changes caused by flight cancellations due to bad weather, ill health, roadblocks, or other factors beyond our control",
    ];
  }

  if (activePackage === 4) {
    notIncludedItems = [
      "Air/train fare",
      "Entry tickets to attractions",
      "Early check-in and late checkout",
      "Lunch and dinner at hotels",
      "Boating and other activities",
    ];
  }

  return (
    <section
      id="important"
      style={{ background: "rgba(236, 234, 234, 0.70)" }}
      className="md:px-24 px-5 py-12"
    >
      <h2 className="font-arvo text-xl md:text-3xl tracking-[6px] font-bold capitalize py-12">
        WHAT’S NOT INCLUDED
      </h2>

      <ol className="list-disc flex flex-col gap-4 px-12 text-xl md:text-2xl">
        {notIncludedItems.map((item, index) => (
          <li className="text-with-space-1 uppercase" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Booking() {
  return (
    <section className="md:px-24 py-24 bg-white flex flex-col">
      <div>
        <p className="text-xl md:text-3xl tracking-[2px] uppercase text-center md:leading-[2em] mb-9">
          The packages are customizable, so please contact us directly <br />
          for your customization and queries.
        </p>
      </div>

      <div className="flex justify-evenly">
        <Link
          to="/forms"
          className="px-8 py-6 hover:bg-black hover:text-white duration-150 border border-black"
        >
          BOOK NOW
        </Link>
        <button className="px-8 py-6 hover:bg-black hover:text-white duration-150 border border-black">
          CONTACT US
        </button>
      </div>
    </section>
  );
}

export default BangloreAbout;
