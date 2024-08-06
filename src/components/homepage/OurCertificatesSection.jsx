// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation CSS

// Import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules"; // Import Navigation
import { SmallHeader } from "../general";
import { QuoteIcon, StarIcon } from "lucide-react";

const OurCertificatesSection = () => {
  const certiList = [
    "/images/cert/apeda.png",
    "/images/cert/dgft.png",
    "/images/cert/fssai.png",
    "/images/cert/iso.png",
    "/images/cert/sgs.png",
    "/images/cert/spicesBoard.png",
  ];
  return (
    <section className="mx-auto my-16 max-w-[1400px] p-4">
      <div>
        <SmallHeader text="Our Pride" />
        <h1 className="mt-6 text-3xl font-medium text-black-2 md:text-5xl">
          Certificates We are Honoured
        </h1>
      </div>
      <div className="relative mx-auto mt-20 flex flex-wrap gap-x-8 gap-y-12">
        {certiList.map((img, i) => (
          <div
            key={i}
            className="testi-card relative h-[340px] overflow-hidden bg-transparent sm:h-[370px] sm:w-[400px]"
          >
            <div className="h-full w-full p-8">
              <figure className="grid h-full w-full place-items-center p-10">
                <img src={img} alt="img" />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCertificatesSection;
