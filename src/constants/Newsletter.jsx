import Graphicelements from "../assets/Graphicelements.png";

function Newsletter() {
  return (
    <section className="relative flex flex-col items-center justify-center my-2">
      <div className="w-[80%] p-8  rounded-3xl py-12 bg-[#face4925] flex flex-col justify-center items-center gap-12">
        <p className="font-bold uppercase text-4xl underline underline-offset-4 tracking-[4px]">
          corporate office{" "}
        </p>

        <div className="flex w-full">
          <div className="h-[200px]  basis-[50%]">
            <h5 className="text-4xl font-semibold">Coimbatore</h5>
            <address className="text-xl pl-5 pt-6">
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
          <div className="h-[200px] border-l border-black  basis-[50%]">
            <h5 className="pl-6 text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-12 pt-6">
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

        <hr className="w-full h-[1px] border-t border-black" />

        <div className="flex w-full">
          <div className="h-[200px] basis-[25%]">
            <h5 className="text-4xl font-semibold">Coimbatore</h5>
            <address className="text-xl pl-5 pt-6">
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
          <div className="border-l border-black h-[200px]  basis-[25%]">
            <h5 className="pl-6 text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-12 pt-6">
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
          <div className="border-l border-black h-[200px]  basis-[25%]">
            <h5 className="pl-6 text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-12 pt-6">
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
          <div className="border-l border-black h-[200px]  basis-[25%]">
            <h5 className="pl-6 text-4xl font-semibold">Coimbatore</h5>
            <address className="pl-12 pt-6">
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
