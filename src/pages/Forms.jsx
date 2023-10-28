import { useState } from "react";

function Forms() {
  const [departure, setDeparture] = useState("null");
  const [book, setBook] = useState("null");
  const [packageType, setPackageType] = useState("null");

  return (
    <section className="px-6 md:px-24 py-12 text-center ">
      <h4 className="text-center font-encodesans text-lg md:text-4xl">
        Please Fill This Form, We Will Get Back To You <br />
        Within 24 Hours
      </h4>
      <p className="text-center font-adanda text-xl md:text-2xl my-4 md:my-12">
        How It Works ?
      </p>
      <ol className="list-decimal list-inside text-center font-primary text-lg md:text-2xl flex-col flex gap-3">
        <li>Tell us details of your holiday plan.</li>
        <li>
          Get multiple quotes from expert agents, compare & customize further.{" "}
        </li>
        <li>Select & book best deal.</li>
      </ol>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="my-8 md:w-[60%] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl  rounded-lg"
          />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Number"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          />
        </div>
        <div className="my-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email ID"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg w-full"
          />
        </div>
        <div className="my-3 grid grid-cols-2 gap-6">
          <input
            type="text"
            name="from"
            id="from"
            placeholder="From"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          />
          <select
            name="to"
            id="to"
            className="p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg"
          >
            <option value="" disabled>
              To
            </option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
          </select>
        </div>
        <p className="text-left font-encodesans text-lg my-6">
          Departure Date(Choose Any)
        </p>

        <div className="grid md:grid-cols-3 font-encodesans text-[#A7A7A7] md:gap-20 gap-5">
          <button
            onClick={() => setDeparture("fixed")}
            className={`p-4 border rounded-xl ${
              departure === "fixed" ? "bg-black text-white" : ""
            }`}
          >
            Fixed
          </button>
          <button
            onClick={() => setDeparture("flexible")}
            className={`p-4 border rounded-xl ${
              departure === "flexible" ? "bg-black text-white" : ""
            }`}
          >
            Flexible
          </button>
          <button
            onClick={() => setDeparture("anytime")}
            className={`p-4 border rounded-xl ${
              departure === "anytime" ? "bg-black text-white" : ""
            }`}
          >
            Anytime
          </button>
        </div>

        <p className="text-left font-encodesans text-lg my-6">
          Preferred Hotel Category
        </p>
        <div className="flex md:text-xl gap-5">
          <div>
            <input type="checkbox" name="2star" id="2star" className="mx-2" />
            <label htmlFor="2star">2-Star</label>
          </div>
          <div>
            <input type="checkbox" name="3star" id="3star" className="mx-2" />
            <label htmlFor="3star">3-Star</label>
          </div>
          <div>
            <input type="checkbox" name="4star" id="4star" className="mx-2" />
            <label htmlFor="4star">4-Star</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="5star" id="5star" className="mx-2" />
            <label htmlFor="5star">5-Star</label>
          </div>
        </div>

        <div className="my-12 flex-col md:flex-row flex gap-4 md:gap-12 text-xl">
          <p>Flights To Be Included?</p>
          <div>
            <input type="radio" name="flight" id="yes" className="mx-2" />
            <label htmlFor="yes">Yes</label>

            <input type="radio" name="flight" id="no" className="mx-2" />
            <label htmlFor="no">No</label>
          </div>
        </div>

        <p className="text-left font-encodesans text-lg my-6">
          Budget Without Airfare : (per person)
        </p>
        <div className="md:w-[50%]">
          <input
            type="number"
            name="budget"
            id="budget"
            placeholder="Enter Your Budget Value"
            className="m-0 p-4 border drop-shadow-xl focus:drop-shadow-2xl rounded-lg w-full"
          />
        </div>

        <div className="grid md:grid-cols-3 my-6 text-left font-encodesans text-lg md:gap-12 gap-5">
          <div className="flex flex-col gap-4">
            <p>
              Adults <span className="text-[#b6b6b6]">(12+years)</span>
            </p>
            <select name="adults" id="adults" className="p-4 border">
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Infant <span className="text-[#b6b6b6]">(0-2 Years)</span>
            </p>
            <select name="infant" id="infant" className="p-4 border">
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Children <span className="text-[#b6b6b6]">(2-12 Years)</span>
            </p>
            <select name="children" id="children" className="p-4 border">
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
            </select>
          </div>
        </div>

        <p className="text-left font-encodesans text-lg my-6">I Will Book</p>

        <div className="grid md:grid-cols-3 gap-8">
          <button
            onClick={() => setBook("1")}
            className={`p-4 border rounded-xl ${
              book === "1" ? "bg-black text-white" : ""
            }`}
          >
            In Next 2-3 Days
          </button>
          <button
            onClick={() => setBook("2")}
            className={`p-4 border rounded-xl ${
              book === "2" ? "bg-black text-white" : ""
            }`}
          >
            In This Week
          </button>
          <button
            onClick={() => setBook("3")}
            className={`p-4 border rounded-xl ${
              book === "3" ? "bg-black text-white" : ""
            }`}
          >
            In This Month
          </button>
          <button
            onClick={() => setBook("4")}
            className={`p-4 border rounded-xl ${
              book === "4" ? "bg-black text-white" : ""
            }`}
          >
            Later Sometime
          </button>

          <button
            onClick={() => setBook("5")}
            className={`p-4 border rounded-xl ${
              book === "5" ? "bg-black text-white" : ""
            }`}
          >
            Just Checking Prices
          </button>
        </div>
        <div className="my-12 flex-col md:flex-row flex gap-4 md:gap-12 text-xl">
          <p>Cab for local sight seeing?</p>
          <div>
            <input type="radio" name="cab" id="cabyes" className="mx-2" />
            <label htmlFor="cabyes">Yes</label>

            <input type="radio" name="cab" id="cabno" className="mx-2" />
            <label htmlFor="cabno">No</label>
          </div>
        </div>
        <p className="text-left font-encodesans text-lg my-12">
          Which type of package would you prefer?
        </p>
        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={() => setPackageType("1")}
            className={`p-4 border rounded-xl ${
              packageType === "1" ? "bg-black text-white" : ""
            }`}
          >
            Customizable Package
          </button>
          <button
            onClick={() => setPackageType("2")}
            className={`p-4 border rounded-xl ${
              packageType === "2" ? "bg-black text-white" : ""
            }`}
          >
            Bestselling Standard Package
          </button>
        </div>

        <div className="w-full mx-0 text-left">
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            placeholder="Additional Comments"
            className="p-4 w-full border drop-shadow-xl focus:drop-shadow-2xl rounded-lg my-12"
          ></textarea>
        </div>
        <div className="flex gap-2 text-lg">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="mx-2 my-2 accent-[#B99674]"
          />
          <label htmlFor="terms">Subscribe To Newsletter</label>
        </div>
        <button
          type="submit"
          className={`p-4 border bg-[#B99674] text-white w-full mt-12`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Forms;
