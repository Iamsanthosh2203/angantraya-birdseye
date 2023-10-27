import message from "../assets/message.svg";
import Graphicelements from "../assets/Graphicelements.png";
import objects from "../assets/objects.png";

function Newsletter() {
  return (
    <section className="flex flex-col items-center justify-center my-20  ">
      <div className="w-[80%] p-8  rounded-3xl py-12 bg-[#face4925] flex flex-col justify-center items-center gap-12">
        <p className="font-bold text-lg tracking-[4px]">
          SUBSCIBE TO OUR NEWS LETTER
        </p>
        <p className="text-xl md:text-6xl md:leading-relaxed font-adanda font-bold text-center">
          Prepare yourself & let’s explore the{" "}
          <br className="hidden md:block" />
          beauty of the world
        </p>

        <div className="relative flex flex-col md:flex-row w-full justify-center gap-8">
          <div className="flex items-center gap-6 justify-center p-4 md:px-12 bg-white rounded-xl">
            {/*generate fontawesome email icon */}
            <img src={message} alt="message" className="w-7" />
            <input
              className="placeholder:text-xl outline-none"
              placeholder="Your Email"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <button className="font-semibold text-white p-5 bg-[#5D50C6] rounded-3xl">
            Subscribe
          </button>

          <img
            src={Graphicelements}
            alt="Graphicelements"
            className="hidden md:inline-block absolute -left-24 -top-[600%]"
          />
        </div>
      </div>
      <div className="hidden md:flex w-full items-end justify-end">
        <img src={objects} alt="objects" />
      </div>
    </section>
  );
}

export default Newsletter;
