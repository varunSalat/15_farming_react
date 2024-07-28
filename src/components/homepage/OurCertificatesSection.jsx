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
    "https://apexriminternational.com/assets/cert/apeda.png",
    "https://apexriminternational.com/assets/cert/dgft.png",
    "https://apexriminternational.com/assets/cert/fssai.png",
    "https://apexriminternational.com/assets/cert/iso.png",
    "https://apexriminternational.com/assets/cert/sgs.png",
    "https://apexriminternational.com/assets/cert/spicesBoard.png",
  ];
  return (
    <section className="mx-auto my-16 max-w-[1400px] p-4">
      <div>
        <SmallHeader text="Our Pride" />
        <h1 className="mt-6 text-5xl font-medium text-black-2">
          Certificates We are Honoured
        </h1>
      </div>
      <div className="relative mx-auto mt-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Continue autoplay after interactions
          }}
          modules={[FreeMode, Pagination, Navigation]} // Include Navigation here
          className="mySwiper"
        >
          {certiList.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="testi-card relative h-[370px] w-[400px] bg-transparent">
                <div className="h-full w-full p-8">
                  <figure className="grid h-full w-full place-items-center p-10">
                    <img src={img} alt="img" />
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurCertificatesSection;
