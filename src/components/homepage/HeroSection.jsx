import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative m-4 h-[calc(100vh-30px)] min-h-[700px]">
      <div className="h-full overflow-hidden rounded-2xl">
        <img
          src={
            "https://agrimo-demo.pbminfotech.com/html-demo/images/banner-slider-img/demo01-slide-01.jpg"
          }
          className={`h-full w-full`}
        />
      </div>
      <div className="absolute left-60 top-1/2 -translate-y-1/2 text-white">
        <div className="w-fit rounded-full border border-white px-2 py-1 text-sm">
          <p className="capitalize">Innovation Grows here</p>
        </div>
        <h1 className="my-4 w-fit border-b text-7xl font-bold">
          Apex Rim <span className="block">International</span>
        </h1>
        <p className="max-w-[500px]">
          Cultivating Sustainable Futures, One Crop at a Time. Discover
          Excellence with Apexrim International – Your Trusted Partner in Indian
          Agriculture
        </p>
        <Link
          to={"/contact-us"}
          className="mt-4 flex w-fit gap-2 rounded-full bg-white px-4 py-3 text-black-2 transition-three-all hover:bg-secondary hover:text-white"
        >
          Contact Us <ArrowUpRightIcon />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
