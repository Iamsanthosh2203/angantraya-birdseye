import logoai from "../assets/logoai.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

function Footer() {
  return (
    <footer className="flex my-11 gap-24">
      <img src={logoai} alt="logo" />
      <div className="flex flex-col justify-between basis-[20%]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex gap-5">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h6 className="font-bold text-xl">Company</h6>
        <div className="flex flex-col text-lg gap-3">
          <a href="">About</a>
          <a href="">Carrer</a>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h6 className="font-bold text-xl">Contact</h6>
        <div className="flex flex-col text-lg gap-3">
          <a href="">Partner with us</a>
          <a href="">FAQ&rsquo;s</a>
          <a href="">Blog</a>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h6 className="font-bold text-xl">Meet Us</h6>
        <div className="flex flex-col text-lg gap-3">
          <a href="">+00 92 1234 56789</a>
          <a href="">info@gmail.com</a>
          <p>205. R Street, California</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
