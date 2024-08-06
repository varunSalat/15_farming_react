import { ArrowUpRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const urls = [
    "/images/image-slider/1.png",
    "/images/products/ajwain seed.webp",
    "/images/products/caster seed.jpg",
    "/images/products/coriander seed.jpg",
    "/images/products/cummin seed.webp",
    "/images/products/dill seed.jpg",
    "/images/products/fennel seed.jpg",
    "/images/products/fenugreek seed.jpg",
    "/images/products/ground nut.jpg",
    "/images/products/hulled seed.jpg",
    "/images/products/mustard seed.jpg",
    "/images/products/pear millet.webp",
    "/images/products/penut seed.jpg",
    "/images/products/psyllium seed.png",
    "/images/products/wheat.jpg",
    "/images/products/white sorghum.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % urls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [urls]);

  const increments = 100 / urls.length;
  return (
    <section className="relative m-2 h-[calc(100vh-30px)] lg:m-4 lg:min-h-[700px]">
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <div
          className="flex w-[1600%] items-center justify-start overflow-hidden rounded-2xl transition-all duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${increments * index}%)`,
          }}
        >
          {urls.map((u, i) => (
            <figure className="relative h-[1000px] w-full" key={i}>
              <img
                src={u}
                className="absolute h-full w-full rounded-2xl object-cover object-center"
                alt={i}
              ></img>
            </figure>
          ))}
        </div>
      </div>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white lg:left-60">
        <div className="w-fit rounded-full border border-white px-2 py-1 text-sm">
          <p className="capitalize">BEST QUALITY</p>
        </div>
        <h1 className="my-4 w-fit border-b text-4xl font-bold lg:text-7xl">
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
