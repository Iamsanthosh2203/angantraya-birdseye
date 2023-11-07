import Graphicelements from "../assets/Graphicelements.png";

function Newsletter() {
  return (
    <section className="relative flex flex-col items-center justify-center my-2">
      <div className="w-[80%] p-8  rounded-3xl py-12 bg-[#face4925] flex flex-col justify-center items-center gap-12">
        <p className="text-center font-bold uppercase text-4xl underline underline-offset-4 tracking-[4px]">
          corporate office{" "}
        </p>

        <div className="flex md:flex-row flex-col w-full">
          <div className="h-[200px] border-black pb-3 md:border-0 border-b  basis-[50%]">
            <h5 className="text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-5 pt-6">
              3/200 Sample Address,
              <br />
              Coimbatore
              <br />
              Tamilnadu
              <br />
              India
              <br />
              641001
            </address>
          </div>
          <div className="h-[200px] py-3 border-b md:border-l md:border-b-0 border-black  basis-[50%]">
            <h5 className="md:pl-6 text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-5 md:pl-12 pt-6">
              3/200 Sample Address,
              <br />
              Coimbatore
              <br />
              Tamilnadu
              <br />
              India
              <br />
              641001
            </address>
          </div>
        </div>

        <hr className="w-full md:block hidden h-[1px] border-t border-black" />

        <div className="flex md:flex-row flex-col w-full">
          <div className="h-[200px] basis-[25%] border-b border-black md:border-0 py-3">
            <h5 className="text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-5 pt-6">
              3/200 Sample Address,
              <br />
              Coimbatore
              <br />
              Tamilnadu
              <br />
              India
              <br />
              641001
            </address>
          </div>
          <div className="md:border-l py-3 border-b md:border-b-0 border-black h-[200px]  basis-[25%]">
            <h5 className="md:pl-6 text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-6 md:pl-12 pt-6">
              3/200 Sample Address,
              <br />
              Coimbatore
              <br />
              Tamilnadu
              <br />
              India
              <br />
              641001
            </address>
          </div>
          <div className="md:border-l border-b md:border-b-0 py-3 border-black h-[200px]  basis-[25%]">
            <h5 className="md:pl-6 text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-6 md:pl-12 pt-6">
              3/200 Sample Address,
              <br />
              Coimbatore
              <br />
              Tamilnadu
              <br />
              India
              <br />
              641001
            </address>
          </div>
          <div className="md:border-l py-3 border-black h-[200px]  basis-[25%]">
            <h5 className="md:pl-6 text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-6 md:pl-12 pt-6">
              3/200 Sample Address,
              <br />
              Coimbatore
              <br />
              Tamilnadu
              <br />
              India
              <br />
              641001
            </address>
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
