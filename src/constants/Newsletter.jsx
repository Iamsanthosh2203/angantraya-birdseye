import Graphicelements from "../assets/Graphicelements.png";

function Newsletter() {
  return (
    <section className="relative flex flex-col items-center justify-center my-2">
      <div className="w-[80%] p-8  rounded-3xl py-12 bg-[#face4925] flex flex-col justify-center items-center gap-12">
        <p className="text-center font-bold uppercase text-4xl underline underline-offset-4 tracking-[4px]">
          corporate office{" "}
        </p>

        <div className="flex md:flex-row flex-col w-full justify-center">
          <div className="h-[200px] border-black pb-3 md:border-0 border-b  basis-[30%]">
            <h5 className="text-4xl font-semibold">Nepal</h5>
            <p className="pl-5 pt-6">
              Galkupakha, Thamel,
              <br />
              Kathmandu,
              <br />
              Nepal
              <br />
              India
              <br />
            </p>
          </div>
          <div className="h-[200px] py-3 border-b md:border-l md:border-b-0 border-black  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold">Bhutan</h5>
            <p className="pl-5 md:pl-12 pt-6">
              Norzin lam Thimphu,
              <br />
              Bhutan
              <br />
              India
              <br />
            </p>
          </div>
          <div className="md:border-l py-3 border-black h-[200px]  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold">Kerala</h5>
            <p className="pl-6 md:pl-12 pt-6">
              Yuvaraj Buliding M C Road,
              <br />
              Perumbavoor Ernakulam,
              <br />
              Kerala
              <br />
              India
              <br />
            </p>
          </div>
        </div>

        <hr className="w-full md:block hidden h-[1px] border-t border-black" />

        <div className="flex md:flex-row flex-col w-full justify-center">
          <div className="h-[200px] basis-[30%] border-b border-black md:border-0 py-3">
            <h5 className="text-4xl font-semibold">Kenya</h5>
            <p className="pl-5 pt-6">
              6th Floor,
              <br />
              Room 615 Commerce House,
              <br />
              Moi Avenue
              <br />
              Kenya
              <br />
            </p>
          </div>
          <div className="md:border-l py-3 border-b md:border-b-0 border-black h-[200px]  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold">Pollachi</h5>
            <p className="pl-6 md:pl-12 pt-6">
              Indra Nagar EXT Mahalingapuram,
              <br />
              Pollachi,
              <br />
              Coimbatore
              <br />
              India
              <br />
            </p>
          </div>
          <div className="md:border-l border-b md:border-b-0 py-3 border-black h-[200px]  basis-[30%]">
            <h5 className="md:pl-6 text-4xl font-semibold">Andaman</h5>
            <p className="pl-6 md:pl-12 pt-6">
              Bhathu Basti,
              <br />
              Port Blair
              <br />
              Andaman and Nicobar Islands,
              <br />
              India
              <br />
            </p>
          </div>
        </div>

        <img
          src={Graphicelements}
          alt="Graphicelements"
          className="hidden md:inline-block absolute left-36 -top-[5%]"
        />
      </div>
    </section>
  );
}

export default Newsletter;
