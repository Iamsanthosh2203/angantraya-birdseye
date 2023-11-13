import logoai from "../assets/logoai.png";

function Footer() {
  return (
    <div>
      {" "}
      <footer className="flex flex-col md:flex-row text-center mt-11 gap-6 md:gap-24">
        <img src={logoai} alt="logo" />
        <div className="flex flex-col justify-between basis-[20%]">
          <p>
            Angantraya Birdseye LLP - A Destination Management Company&B2B Tour
            Company, Package Supplier, travel management services like Cultural
            Packages, Corporate Packages, Adventure Packages, Honeymoon
            Packages, Etc.... We specialize in leisure and corporate travel to
            clients from India and other parts of the world.
          </p>
          <div className="flex gap-5 justify-center md:justify-normal items-center mt-5 md:mt-0">
            <i className="fa-brands fa-linkedin-in p-3 bg-[#2596BE] rounded-full text-white"></i>
            <i className="fa-brands fa-instagram p-3 bg-[#2596BE] rounded-full text-white"></i>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <h6 className="font-bold text-xl">Company</h6>
            <div className="flex flex-col text-lg gap-3">
              <a href="/about">About Us</a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h6 className="font-bold text-xl">Contact</h6>
            <div className="flex flex-col text-lg gap-3">
              <a href="/partner">Partner with us</a>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6">
            <h6 className="font-bold text-xl">Meet Us</h6>
            <div className="flex flex-col text-lg gap-3">
              <a href="">+00 92 1234 56789</a>
              <a href="">info@gmail.com</a>
              <p>205. R Street, California</p>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-6">
          <h6 className="font-bold text-xl">Meet Us</h6>
          <div className="flex flex-col text-lg gap-3">
            <a href="">+00 92 1234 56789</a>
            <a href="">info@gmail.com</a>
            <p>205. R Street, California</p>
          </div>
        </div>
      </footer>
      <div className="text-center font-recursive py-2">
        <p>
          Design And Developed By{" "}
          <a href="https://midlead.com" className="text-[#2596BE]">
            MidLead
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
